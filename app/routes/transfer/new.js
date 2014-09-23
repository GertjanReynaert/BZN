import Ember from "ember";

export default Ember.Route.extend({
  actions: {
    save: function(){
      var controller = this.get('controller');
      var transfer = this.store.createRecord('transfer', {
        code: controller.get('code'),
      });

      var self = this;
      transfer.save().then(function() {
        self.transitionTo('transfer.edit', transfer);
      });
    }
  }
});
