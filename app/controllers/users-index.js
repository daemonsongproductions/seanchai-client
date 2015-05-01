import Ember from 'ember';

var UsersIndexController = Ember.ArrayController.extend({
  sortProperties: ['username'],
  sortAscending: true
});

export default UsersIndexController;
