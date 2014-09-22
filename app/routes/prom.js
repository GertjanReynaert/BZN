import Ember from "ember";

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('prom', { code: params.code }).
      then(function(results) {
      return results.content[0];
    });
  },
});
