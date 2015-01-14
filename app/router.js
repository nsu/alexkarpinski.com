import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('resume');
  this.route('contact');
  this.route('projects');
  this.route('skills');
});

export default Router;
