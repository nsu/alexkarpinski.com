from datetime import datetime, time
from dateutil.relativedelta import relativedelta
from core.helpers import datetimeFromMillis


# Find all employee shifts for a range of time beginning at datetime of `start`
# and ending # at datetime of `stop`.
# Returns a dict 
# {'start': datetime, 'stop': datetime, schedules: dict}
def getCalendarEventsByDay(request, start, stop):
    # Javascript likes dealing with time in ms.
    # Deserialize into python datetime obj.
    start = datetimeFromMillis(start)
    stop = datetimeFromMillis(stop)

    # This must happen before the date coercion
    if not start.date() < stop.date():
        error_msg = "You can't start a search range after its stop. \
                    Got start={start} and stop={stop}."
        error_msg.format(start=start, stop=stop)
        raise ValueError(error_msg)

    # Build our data for return before date coercion
    # so that the input datetimes match the outputs
    days_as_dict = {'start': start, 'stop': stop, 'schedules': []}

    # DATE COERCION
    # We're ony dealing with full calendar days, so if there's any time info
    # we can safely strip it off by resetting to midnight.
    start = datetime.combine(start, time(0, 0, 0))
    # we want the full day for stop, so we'll actually go to midnight on the next day
    # note that later, we'll have to remove the last (empty) day from the list
    stop = datetime.combine(stop + relativedelta(days=1), time(0, 0, 0))

    # Grab all the shift schedules available to a user
    schedules = get_permitted_objects(request.user, Schedule, 'view')
    # KEEP things that begin before the end of our search
    # REMOVE things that end before the start of our search
    # |--ignore--|    |---keep---|   |-keep-|    |---keep---|  |----ignore----|
    #                          |--------search--------|
    #                        start                   stop
    # NB (leaves in schedules which end after the stop time AND things which have a null end time)
    schedules.filter(begin__lte=stop)
    schedules.exclude(end__lt=start)

    for schedule in schedules:
        # result storage
        flat_schedule = {'pk': schedule.pk, 'days': []}

        date_range = []
        days_difference = range((stop-start).days)
        date_range = [start + relativedelta(days=n) for n in days_difference]
        # We could grab all the events across all schedules and times at once
        # but we do it day-by-day and schedule-by-schedule
        # so that the caching is more generic
        for index, day in enumerate(date_range):
            # Generate cache key for this unique schedule/date combination
            day_key = "staffcal_%s_%s_%s_%s" % (schedule.id, day.year, day.month, day.day)
            result = cache.get(day_key)
            # cache hit
            if result:
                flat_schedule['days'] += json.loads(result)
            # cache miss.
            else:
                events = schedule.getEvents(start=day,
                                            stop=day+relativedelta(days=1),
                                            include_drops=True,
                                            exclude_outside=True,
                                            split_by_day=True)
                # Throw away extra day on the end
                if events: events.pop()
                flat_schedule['days'] += events
                cache.set(day_key, smart_serialize(events), 0)
                CK, created = CacheKey.objects.get_or_create(schedule=schedule, key=day_key)
                CK.save()
        days_as_dict['schedules'].append(flat_schedule)

    return smartSerialize(daysAsDict)
