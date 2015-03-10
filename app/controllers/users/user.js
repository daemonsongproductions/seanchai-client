import Ember from "ember";

export default Ember.ObjectController.extend({

  isMe: function(){
    return Seanchai.currentUser.get('username') === this.get('username');
  }.property("this"),
  canEdit: function(){
    return (this.get('isMe') === true || Seanchai.currentUser.get('administrator') === true )
  }.property("this")
});
