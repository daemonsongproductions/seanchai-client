import Ember from "ember";
import DS from "ember-data";

export default Ember.Route.extend({
  redirect: function() {
    this.transitionTo('home');
  }
});
