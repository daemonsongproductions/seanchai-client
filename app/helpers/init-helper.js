import initCurrentUser from 'seanchai-client/utils/init-current-user';
import LoginStateManager from 'seanchai-client/utils/login-state-manager';

var initApp = function(currentUser) {
  initCurrentUser(currentUser);
  if (currentUser) {
    return LoginStateManager.transitionTo('authenticated');
  }
};

export default initApp;
