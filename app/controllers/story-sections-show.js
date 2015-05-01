import Ember from 'ember';

var StorySectionsShowController = Ember.ObjectController.extend({
  sortProperties: ['title'],
  sortAscending: true,
  needs: "story",
  story: Ember.computed.alias("controllers.story")
});

export default StorySectionsShowController;
