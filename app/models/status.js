import DS from 'ember-data';

var Status = DS.Model.extend({
  name: DS.attr('string')
});

export default Status;
