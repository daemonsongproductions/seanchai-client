import Ember from "ember";

// TODO: Add in editable mixin when it's done.

export default Ember.Route.extend({
  model: function(params) {
    return this.get('store').find_section(this.modelFor('story').get('id'), params.order);
  },
  setupController: function(controller, model) {
    controller.set('model', model );
    var statuses = this.get('store').find('status');
    statuses.then(function(data) {
      controller.set('statuses', data);
    });
  }
});
