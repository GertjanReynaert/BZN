import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    //should be looking for transfers of a prom
    return this.store.find('transfer');
  }
});
