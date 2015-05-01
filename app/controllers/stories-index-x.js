import Ember from 'ember';

var StoriesIndexController = Ember.ArrayController.extend({


  hideNew: function() {
    this.set('isNewVisible', false);
  },

  showNew: function() {
    this.set('isNewVisible', true);
  }

});

export default StoriesIndexController;
