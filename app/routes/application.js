import Ember from "ember";
import DS from "ember-data";

export default Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('user', 'current_user');
  },
  afterModel: function(currentUser) {
    Seanchai.initApp(currentUser);
  }
});
