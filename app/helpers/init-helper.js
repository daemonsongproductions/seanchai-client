import initCurrentUser from '/app/helpers/init-current-user';
import LoginStateManager from '/app/components/login-state-manager';

var initApp = function(currentUser) {
  initCurrentUser(currentUser);
  if (currentUser) {
    return LoginStateManager.transitionTo('authenticated');
  }
};

export default initApp;
