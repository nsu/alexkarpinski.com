/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'alexkarp-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        'ember-htmlbars': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV.contentSecurityPolicy =  {
    'default-src': "'none'",
    'script-src': "'self' "            +
                  "'unsafe-eval' "     +
                  "'unsafe-inline' "   +
                  "http://www.google-analytics.com " +
                  "http://maxcdn.bootstrapcdn.com",
    'font-src': "'self' " +
                "http://maxcdn.bootstrapcdn.com",
    'connect-src': "'self'",
    'img-src': "'self' " +
              "http://www.google-analytics.com",
    'style-src': "'self' " +
                 "http://maxcdn.bootstrapcdn.com " +
                 "http://yui.yahooapis.com/",
    'media-src': "'self'"
  };

  return ENV;
};
