import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
      var model = {};
      var jobs = [
        {
          company:      "University of Rochester",
          start_year:   "2010",
          end_year:     "2014",
          position:     "Software Engineer",
          description:  "I built and maintained a Django-based web application \
          for the University of Rochester’s IT Center.  My team used \
          test-driven development and agile methods to build software \
          that successfully raised efficiency and reduced mistakes at the \
          IT Center. As the system administrator for the project I also \
          designed and managed the server stack.",
          tools:[
              {name: "Django", file:"images/tools/django.svg"},
          ]
        }
      ];
      model.jobs = jobs;
      return model; 
  }
});
