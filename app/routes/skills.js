import Ember from 'ember';


export default Ember.Route.extend({
  model: function(){
    // List of categories (pro, personal, toy) each containing a
    // list of tool-name/file-name pairs for iteration in template
    var skill_categories = [
      {
        name: "Professional Use", 
        skills: [
          {name: "Python", file:"images/tools/python.svg"},
          {name: "Chef", file:"images/tools/chef.svg"},
          {name: "Linux", file:"images/tools/penguin.svg"},
          {name: "Git", file:"images/tools/git.svg"},
          {name: "Javascript", file:"images/tools/javascript.svg"},

          {name: "Django", file:"images/tools/django.svg"},
          {name: "jQuery", file:"images/tools/jquery.svg"},
          {name: "HTML/CSS", file:"images/tools/html.svg"},
          {name: "AWS", file:"images/tools/aws.svg"},
          {name: "Testing", file:"images/tools/tdd.svg"},

          {name: "NGinx", file:"images/tools/nginx.svg"},
          {name: "Apache", file:"images/tools/apache.svg"},
          {name: "DNS", file:"images/tools/dns.svg"},
          {name: "Vagrant", file:"images/tools/vagrant.svg"},
          {name: "Jira", file:"images/tools/jira.svg"}
         ]
      },
      {
        name: "Personal Use", 
        skills: [
          {name: "Ruby", file:"images/tools/Ruby.svg"},
          {name: "SASS", file:"images/tools/sass.svg"},
          {name: "EmberJS", file:"images/tools/ember.svg"},
          {name: "NodeJS", file:"images/tools/nodejs.svg"},
          {name: "ExpressJS", file:"images/tools/express.svg"},

          {name: "MongoDB", file:"images/tools/mongodb.svg"},
          {name: "CouchDB", file:"images/tools/couchdb.svg"},
          {name: "Bootstrap", file:"images/tools/bootstrap.svg"},
          {name: "Foundation", file:"images/tools/foundation.svg"},
          {name: "Mercurial", file:"images/tools/mercurial.svg"}
         ]
      },
      {
        name: "Toys", 
        skills: [
          {name: "Salt", file:"images/tools/salt.svg"},
          {name: "Angular", file:"images/tools/angular.svg"},
          {name: "Broccoli", file:"images/tools/broccoli.svg"},
          {name: "Rails", file:"images/tools/rails.svg"},
          {name: "Illustrator", file:"images/tools/illustrator.svg"},
         ]
      },
   ];
   skill_categories = _.map(skill_categories, function(category) {
    var grouped_skills = [];
    while (category.skills.length > 0) {
      grouped_skills.push( category.skills.splice(0, 5));
    } 
    category.skill_groups = grouped_skills;
    return category;
   });
   return skill_categories;
 }
});
