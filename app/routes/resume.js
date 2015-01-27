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
              {name: "Python", file:"images/tools/python.svg"},
              {name: "Chef", file:"images/tools/chef.svg"},
              {name: "Linux", file:"images/tools/penguin.svg"},
              {name: "Git", file:"images/tools/git.svg"},
              {name: "Javascript", file:"images/tools/javascript.svg"},
              {name: "Testing", file:"images/tools/tdd.svg"},
              {name: "HTML/CSS", file:"images/tools/html.svg"},
              {name: "Apache", file:"images/tools/apache.svg"},
              {name: "NGinx", file:"images/tools/nginx.svg"},
          ]
        },
        {
          company:      "University of Massachusetts - CESD",
          start_year:   "2014",
          // end_year:     "2014",
          position:     "Software Consultant",
          description:  "I Designed a plan for the modernization and \
                        improvement of Drupal development at UMass' Center for\
                        Educational Design. This included the use of version \
                        control, development environments, issue tracking and \
                        release management.  Improving the Center required \
                        research observation, user education, and \
                        technical development.",
          tools:[
              {name: "Drupal", file:"images/tools/drupal.svg"},
              {name: "Vagrant", file:"images/tools/vagrant.svg"},
              {name: "Git", file:"images/tools/git.svg"},
              {name: "Javascript", file:"images/tools/javascript.svg"},
              {name: "HTML/CSS", file:"images/tools/html.svg"},
              {name: "Chef", file:"images/tools/chef.svg"},
              {name: "Jira", file:"images/tools/jira.svg"},
          ]
        },
        {
          company:      "Freelance Development",
          start_year:   "2010",
          end_year:     "2014",
          // position:     "Software Engineer",
          description:  "I have been contracted by <em>Sleep No More NYC</em>, \
                        <em>UMass</em>, and <em>Lawrence University</em> to build applications, \
                        maintain web presences and consult on systems \
                        administration.",
          tools:[
              {name: "HTML/CSS", file:"images/tools/html.svg"},
              {name: "Javascript", file:"images/tools/javascript.svg"},
              {name: "jQuery", file:"images/tools/jquery.svg"},
              {name: "Bootstrap", file:"images/tools/bootstrap.svg"},
              {name: "Git", file:"images/tools/git.svg"},
              {name: "Apache", file:"images/tools/apache.svg"},
          ]
        },
        {
          company:      "GoSudo.com",
          start_year:   "2013",
          // end_year:     "Present",
          position:     "Operations Engineer",
          description:  "As a member of the Operations team at Sudo I \
                        was responsible for building systems that formed the \
                        company’s technical foundation. This included writing \
                        configuration management, and designing the \
                        environments for testing, staging and production.",
          tools:[
              {name: "Django", file:"images/tools/django.svg"},
              {name: "Python", file:"images/tools/python.svg"},
              {name: "Chef", file:"images/tools/chef.svg"},
              {name: "Linux", file:"images/tools/penguin.svg"},
              {name: "Git", file:"images/tools/git.svg"},
              {name: "Javascript", file:"images/tools/javascript.svg"},
              {name: "Testing", file:"images/tools/tdd.svg"},
              {name: "HTML/CSS", file:"images/tools/html.svg"},
          ]
        }
      ];
      // Display most recent jobs at the top of the page.
      jobs.sort(function(a, b){return b.start_year - a.start_year;});
      model.jobs = jobs;
      return model; 
  }
});
