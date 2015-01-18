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
          {name: "Git", file:"images/tools/git.svg"},
          {name: "Git", file:"images/tools/git.svg"},
          {name: "Git", file:"images/tools/git.svg"},
          {name: "Git", file:"images/tools/git.svg"},
          {name: "Git", file:"images/tools/git.svg"}
         ]
      },
      {
        name: "Personal Use", 
        skills: [
          {name: "Git", file:"images/tools/git.svg"},
          {name: "Git", file:"images/tools/git.svg"},
          {name: "Git", file:"images/tools/git.svg"},
          {name: "Git", file:"images/tools/git.svg"},
          {name: "Git", file:"images/tools/git.svg"},
          {name: "Git", file:"images/tools/git.svg"},
          {name: "Git", file:"images/tools/git.svg"},
          {name: "Git", file:"images/tools/git.svg"},
          {name: "Git", file:"images/tools/git.svg"},
          {name: "Git", file:"images/tools/git.svg"}
         ]
      },
      {
        name: "Toys", 
        skills: [
          {name: "Git", file:"images/tools/git.svg"},
          {name: "Git", file:"images/tools/git.svg"},
          {name: "Git", file:"images/tools/git.svg"},
          {name: "Git", file:"images/tools/git.svg"},
          {name: "Git", file:"images/tools/git.svg"},
          {name: "Git", file:"images/tools/git.svg"},
          {name: "Git", file:"images/tools/git.svg"},
          {name: "Git", file:"images/tools/git.svg"},
          {name: "Git", file:"images/tools/git.svg"},
          {name: "Git", file:"images/tools/git.svg"}
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
