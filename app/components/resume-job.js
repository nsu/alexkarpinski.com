import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggle_extra_details: function(){
      this.$().find(".job-extra-info").slideToggle();
    }
  }
});
