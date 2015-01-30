import Ember from 'ember';

export default Ember.Controller.extend({
  grouped_skills: function(){
    var skills = this.get('model.skills');
    var grouped_skills = _.chunk(skills, 5);
    return grouped_skills;
  }.property('model'),
});
