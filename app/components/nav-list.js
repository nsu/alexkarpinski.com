import Ember from 'ember';

// All pages in the nav-list must have routes
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
      title: "Projects",
      route: "projects",
    },
    {
      title: "Skills & Tools",
      route: "skills",
    },
    {
      title: "Contact",
      route: "contact",
    },
  ],
  actions: {
  }
});
