import Ember from 'ember';

export default Ember.Component.extend({
  pages: [
    {
      title: "Home",
      route: "index",
    },
    {
    title: "Resumé",
    route: "resume",
    },
    {
      title: "Contact",
      route: "contact",
    },
    {
      title: "Projects",
      route: "projects",
    },
  ],
  actions: {
  }
});
