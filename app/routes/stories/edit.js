import Ember from "ember";
import DS from "ember-data";

// TODO: add in editable mixin when it's done
export default Ember.Route.extend({
  templateName: "stories/edit",
  model: function(params) {
    return this.get('store').find('story', params.story_id);
  },
  setupController: function(controller, model) {
    controller.set('model', model );
    var statuses = this.get('store').find('status');
    statuses.then(function(data) {
      controller.set('statuses', data);
    });
  }
});
