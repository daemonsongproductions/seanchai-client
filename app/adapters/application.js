import DS from 'ember-data';
import Ember from 'ember';

var ApplicationAdapter = DS.RESTAdapter.extend({
  pathForType: function(type) {
    var underscored = Ember.String.underscore(type)
    return Ember.String.pluralize(underscored);
  }
});

export default ApplicationAdapter;
