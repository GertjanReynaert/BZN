import Ember from "ember";

export default Ember.Route.extend({
  actions: {
    save: function(){
      this.modelFor('articles.edit').save().then(function() {
        console.warn('successfully edited article');
      });
    },

    delete: function() {
      this.modelFor('articles.edit').destroyRecord();
      this.transitionTo('articles.index');
    }
  }
});
