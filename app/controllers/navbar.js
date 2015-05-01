import Ember from 'ember';
import LoginStateManager from 'seanchai-client/utils/login-state-manager';

var NavbarController = Ember.ObjectController.extend({
  authStateBinding: Ember.Binding.oneWay('LoginStateManager.currentState'),
  authState: null,
  authenticated: (function() {
    var log = Ember.Logger;
    log.info("NavbarController authent");
    return this.get("authState") === LoginStateManager.authenticated;
  }).property("authState"),
  user: (function() {
    if (this.get("authState") === LoginStateManager.authenticated) {
      return currentUser;
    } else {
      return null;
    }
  }).property("authState"),
  actions: {
    logout: function() {
      var me;
      var log = Ember.Logger;
      log.info("NavbarController handling logout event...");
      me = this;
      return Authentication.logout(this, function() {
        return me.transitionToRoute("home");
      });
    },
    profile: function() {
      this.transitionToRoute('user', this.get('user'));
    }
  }
});

export default NavbarController;
