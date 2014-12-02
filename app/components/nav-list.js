import Ember from 'ember';

export default Ember.Component.extend({
  pages: function() {
    var self = this;
    console.log("index" === self.get('my_path'));
    var pages = [
      {
        title: "Home",
        route: "index",
        href: "butts",
      },
    ];
    _.map(pages, function(page){return page;});
  }.property('my_path')
});
