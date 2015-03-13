import Ember from "ember";
import DS from "ember-data";

export default Ember.Route.extend({
  model: function() {
    return Ember.Object.create({email: "", username:"", password: "", password_confirmation: "", selected_role: ""});
  }
});
