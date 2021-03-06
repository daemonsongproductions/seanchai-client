import Ember from "ember";
import DS from "ember-data";


Seanchai.initApp = function(currentUser) {
  Seanchai.initCurrentUser(currentUser);
  if (Seanchai.currentUser) {
    return Seanchai.LoginStateManager.transitionTo('authenticated');
  }
};

Seanchai.initCurrentUser = function(currentUser) {
  log.info("current user: ", currentUser);
  if (currentUser != null ? currentUser.get('username') : void 0) {
    return Seanchai.currentUser = currentUser;
  }
};
