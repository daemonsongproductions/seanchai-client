import Ember from "ember";

export default Ember.ObjectController.extend({
  actions: {
    cancel: function(){
      this.transitionToRoute('story_sections_index', this.get('model').get('story_slug'));
    },

    submit: function(){
      var controller = this;

      event.preventDefault();

      this.get('model').save().then(
          // fulfill
          function(answer) {
            return controller.transitionToRoute('story_sections_index', answer.get('story_slug'));
          },
          // reject
          function(e) {
            controller.set("errorMsg", "We had a problem creating your story. Did you fill out the form completely?");
          });
    }
  }
});
