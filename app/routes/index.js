import Ember from 'ember';

export default Ember.Route.extend({
  actions:
  {
    'toggleContact': function(modalName){
      return this.render(modalName, {
        into: 'index',
        outlet: 'contactPopover'
      });
    }
  }
});
