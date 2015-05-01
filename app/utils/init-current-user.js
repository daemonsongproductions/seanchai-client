
var initCurrentUser = function(currentUser) {
  log.info("current user: ", currentUser);
  if (currentUser != null ? currentUser.get('username') : void 0) {
    var currentUser = currentUser;
    return currentUser;
  }
};

export default initCurrentUser;

