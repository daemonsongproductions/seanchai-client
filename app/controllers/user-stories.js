import Ember from 'ember';

var UserStoriesController = Ember.ArrayController.extend({
  sortProperties: ['title'],
  sortAscending: true
});

export default UserStoriesController;
