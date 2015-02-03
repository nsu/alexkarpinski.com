import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    // Obfuscate email address
    // Not perfect, but requires spam crawlers to use JS
    // (plus, spambots hate Ember)
    var obfuscated_email = [109, 101, 64, 97, 108, 101, 120, 107, 97, 114, 112, 105, 110, 115, 107, 105, 46, 99, 111, 109];
    var email = _.map(obfuscated_email, function(char){
      return String.fromCharCode(char);
    });
    email = email.join("");
    return {email_address: email};
  }
});
