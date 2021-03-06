import Ember from "ember";
import DS from "ember-data";

export default Ember.Route.extend({
  templateName: "users/user",
  model: function(params) {
    return this.get('store').find('user', params.username);
  }
});
