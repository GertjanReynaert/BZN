import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    var prom = this.modelFor('prom');
    return this.store.find(prom).then(function(prom) {
      return prom.get('stock');
    });
  }
});
