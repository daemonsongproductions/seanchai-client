import Ember from 'ember';

var UserController = Ember.ObjectController.extend({

  isMe: function(){
    return currentUser.get('username') === this.get('username');
  }.property("this"),
  canEdit: function(){
    return (this.get('isMe') === true || currentUser.get('administrator') === true )
  }.property("this")
});

export default UserController;
