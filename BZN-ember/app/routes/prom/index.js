import Ember from "ember";
import Rollback from "../../mixins/rollback";

export default Ember.Route.extend(Rollback, {
  actions: {
    save: function(){
      this.modelFor('prom.index').save().then(function() {
        console.warn('successfully edited prom');
      });
    },

    'delete': function() {
      this.modelFor('prom.index').destroyRecord().then(function() {
        this.transitionTo('proms');
      }.bind(this));
    }
  }
});
