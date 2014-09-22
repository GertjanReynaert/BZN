import Ember from "ember";
import Rollback from "../../mixins/rollback";

export default Ember.Route.extend(Rollback, {
  model: function(params) {
    return this.store.find('article', { code: params.code }).
      then(function(results) {
      return results.content[0];
    });
  }
});
