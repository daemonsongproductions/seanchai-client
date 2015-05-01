import Ember from 'ember';

var StoriesIndexController = Ember.ArrayController.extend({
  sortProperties: ['title'],
  sortAscending: true
});

export default StoriesIndexController;
