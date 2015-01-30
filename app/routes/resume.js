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
          ],
          sample: {
              "description": "This is a sample of Python code from the \
              <em>Lasso</em> project. <em>Lasso</em> is used for managing \
              employee work schedules. This code is a higher level interface \
              to the schedule system. The results from this function are \
              rendered to a full display of an employees shifts, and those of \
              his or her coworkers.",
              "image-element": '<i class="fa fa-pie-chart"></i>',
              "file": "work-samples/lasso-example.py"
            },
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
          ],
          sample: {
              "description": "This is a presentation outlining improvements to \
              be made to CESD's development process. The focus is on \
              decentralization, version control, and automation. Working at \
              CESD informed my opinion on the consequences of technical debt \
              and delayed modernization",
              "image-element": '<i class="fa fa-pie-chart"></i>',
              "file": "work-samples/cesd-example.pdf"
            },
        },
        {
          company:      "Freelance Development",
          start_year:   "2010",
          end_year:     "2014",
          // position:     "Software Engineer",
          description:  "I have been contracted by <em>Sleep No More NYC</em>, \
                        <em>The University of Massachusetts</em>, and \
                        <em>Lawrence University</em> to build applications, \
                        maintain web presences and consult on technical \
                        infrastructure.",
          tools:[
              {name: "HTML/CSS", file:"images/tools/html.svg"},
              {name: "Javascript", file:"images/tools/javascript.svg"},
              {name: "jQuery", file:"images/tools/jquery.svg"},
              {name: "Bootstrap", file:"images/tools/bootstrap.svg"},
              {name: "Git", file:"images/tools/git.svg"},
              {name: "Apache", file:"images/tools/apache.svg"},
          ],
          sample: {
              "description": "HTML, CSS and JS from my most recent \
                                    project &mdash; this website. This code \
                                    generates the <em>Skills & Tools</em> page \
                                    from an EmberJS backing.",
              // maybe do "link-content" instead and specify HTML to insert
              // inside <a> tag?
              "image-element": '<i class="fa fa-sitemap"></i>',
              "file": "work-samples/sudo-example.png"
            },
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
              {name: "Chef", file:"images/tools/chef.svg"},
              {name: "Linux", file:"images/tools/penguin.svg"},
              {name: "AWS", file:"images/tools/aws.svg"},
              {name: "Ruby", file:"images/tools/ruby.svg"},
              {name: "Git", file:"images/tools/git.svg"},
              {name: "DNS", file:"images/tools/dns.svg"},
              {name: "NGinx", file:"images/tools/nginx.svg"},
              {name: "Jira", file:"images/tools/jira.svg"},
              {name: "Python", file:"images/tools/python.svg"},
          ],
          sample: {
              "description": "This chart represents the application \
                            infrastructure for Sudo. The stack was built \
                            across multiple AWS AZs and included replication, \
                            load balancing, and automated failure recovery for \
                            all resources. I implemented this plan using AWS \
                            and Chef. Source files from Sudo are under NDA.",
              "image-element": '<i class="fa fa-sitemap"></i>',
              "file": "work-samples/sudo-example.png"
            },
        }
      ];
      // Display most recent jobs at the top of the page.
      jobs.sort(function(a, b){return b.start_year - a.start_year;});
      model.jobs = jobs;
      return model; 
  }
});
