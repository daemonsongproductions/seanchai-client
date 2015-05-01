import Ember from 'ember';
import InputOptions from '/app/components/input-options';

// Remove this file eventually, but for now I'm saving it as an example
// of how to have a function update when it's bound to a .property("likethis")
var RegistrationController = Ember.ObjectController.extend({
  actions: {
    register: function() {
      log.info("Registering...");
      Authentication.register(this);
    },
    cancel: function() {
      log.info("cancelling registration");
      this.transitionToRoute('home');
    }
  },
  account_options: [
    InputOptions.create({name: "selected_role", value: "reader", label: "I just want to read.", selected: true}),
    InputOptions.create({name: "selected_role", value: "creator", label: "I want to create, too.", selected: false})
  ]

});

export default RegistrationController;
