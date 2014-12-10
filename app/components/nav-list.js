import Ember from 'ember';

export default Ember.Component.extend({
  pages: [
    {
      title: "Home",
      route: "index",
    },
    {
      title: "DevOps",
      route: "devops",
    },
    {
    title: "Resumé",
    route: "resume",
    },
  ],
  actions: {
  }
});
