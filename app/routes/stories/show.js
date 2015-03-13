import Ember from "ember";
import DS from "ember-data";

export default Ember.Route.extend({
  templateName: "stories/show",
  model: function(params) {
    return this.get('store').find('story', params.story_id);
  }
});
