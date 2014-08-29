import Ember from "ember";
import Rollback from "../../mixins/rollback";

export default Ember.Route.extend(Rollback, {
  model: function(params) {
    return this.store.find('article', { code: params.code }).
      then(function(results) {
      return results.content[0];
    });
  },

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
