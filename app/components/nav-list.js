import Ember from 'ember';

export default Ember.Component.extend({
  pages: function() {
    var self = this;
    console.log("index" === self.get('my_path'));
    var pages = [
      {
        title: "Home",
        route: "index",
      },
      {
        title: "DevOps",
        route: "devops",
      },
    ];
    _.map(pages, function(page){
      page.active = page.route === self.get('my_path');
      return page;
    });
    return pages;
  }.property('my_path'),
  actions: {
  }
});
