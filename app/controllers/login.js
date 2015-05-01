import Ember from 'ember';

var LoginController = Ember.ObjectController.extend({

  actions: {
    cancel: function() {
      log.info("cancelling login");
      this.transitionToRoute('home');
    },
    login: function() {
      log.info("Logging in...");
      Authentication.login(this);
    }
  }

});

export default LoginController;
