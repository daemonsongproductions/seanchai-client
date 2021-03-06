Seanchai.ConfirmationTextField = Ember.View.extend({
  classNameBindings: [':form-group', 'invalid:has-error'],
  templateName: "fields/confirmation_text_field",
  fieldType: "text",
  changed: false,
  invalid: true,
  classesBinding: 'classesProperty',
  validationMessage: function(){
    return this.get('label') + " has to match what you entered in " + this.confirmField.get('label') + ".";
  }.property("displayValidationMessage"),
  focusOut: function(){
    this.set('changed', true);
  },
  displayValidationMessage: function(){
    return(this.get('invalid') && this.get('changed'));
  }.property("invalid", "changed"),
  formError: function(){
    this.set('changed', (this.get('controller').get('errorMsg')).length > 0)
  }.observes("controller.content.errorMsg"),
  isInvalid: function(){
    this.set('invalid', ( this.missing(this) || this.different(this)));
  }.observes("value"),
  missing: function(view) {
    return (0 === view.get('value').length);
  },
  different: function(view) {
    return (view.confirmField.get('value') !== view.get('value'));
  },
  classesProperty: function() {
    var class_list = '';
    if (this.get('field-size') !== undefined)
      class_list += ' ' + this.get('field-size');
    return class_list + ' form-control';
  }.property()
});