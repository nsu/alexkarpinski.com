from datetime import datetime
from core.helpers import datetimeFromMillis


# Find all employee shifts for a range of time beginning at datetime of `start`
# and ending # at datetime of `stop`.
# Returns a dict {}
def getCalendarEventsByDay(request, start, stop):
    # Javascript likes dealing with time in ms.
    # Deserialize into python datetime obj.
    start = datetimeFromMillis(start)
    stop = datetimeFromMillis(stop)

    # Function shouldn't behave as if everything is OK
    # if you try to start looking for events AFTER you stop.
    # This must happen before the date coercion
    if not start.date() < stop.date():
        error_msg = "You can't start a search range after its stop. \
                    Got start={start} and stop={stop}."
        error_msg.format(start=start, stop=stop)
        raise ValueError(error_msg)

    # Build our data for return before date coercion
    # so that the input datetimes match the outputs
    daysAsDict = {'start': start, 'stop': stop, 'schedules': []}

    # DATE COERCION
    # We're ony dealing with full calendar days, so if there's any time info
    # we can safely strip it off by resetting to midnight.
    start = datetime.combine(start, time(0, 0, 0))
    # we want the full day for stop, so we'll actually go to midnight on the next day
    # note that later, we'll have to remove the last (empty) day from the list
    stop = datetime.combine(stop + timedelta(days=1), time(0, 0, 0))

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
        flatSchedule = {'pk': schedule.pk, 'days':[]}
        dateRange = []
        day = start
        # We could grab all the events across all schedules and times at once
        # but we do it day-by-day and schedule-by-schedule 
        # so that the caching is more generic
        while day < stop:
            dateRange.append(day)
            day = day + relativedelta(days=1)
        for index,day in enumerate(dateRange):
            dayKey = "staffcal_%s_%s_%s_%s" % (schedule.id, day.year, day.month, day.day)
            result = cache.get(dayKey)
            if result:
                flatSchedule['days'] += json.loads(result)
            else:
                events = schedule.getEvents(day, day+relativedelta(days=1), includeDrops=True, excludeOutside=True, splitByDay=True)
                if events: events.pop()
                flatSchedule['days'] += events
                cache.set(dayKey, smartSerialize(events), 0)
                CK, created = CacheKey.objects.get_or_create(schedule=schedule, key=dayKey)
                CK.save()
        daysAsDict['schedules'].append(flatSchedule)

    return smartSerialize(daysAsDict)
