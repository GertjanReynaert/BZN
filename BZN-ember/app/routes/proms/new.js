import Ember from "ember";

export default Ember.Route.extend({
  deactivate: function() {
    var controller = this.get('controller');
    controller.set('code', '');
    controller.set('lastName', '');
    controller.set('firstName', '');
    controller.set('street', '');
    controller.set('address', '');
    controller.set('city', '');
    controller.set('zipcode', '');
    controller.set('phone', '');
    controller.set('cellphone', '');
    controller.set('email', '');
  },

  actions: {
    save: function(){
      var controller = this.get('controller');
      var prom = this.store.createRecord('prom', {
        code: controller.get('code'),
        lastName: controller.get('lastName'),
        firstName: controller.get('firstName'),
        street: controller.get('street'),
        address: controller.get('address'),
        city: controller.get('city'),
        zipcode: controller.get('zipcode'),
        phone: controller.get('phone'),
        cellphone: controller.get('cellphone'),
        email: controller.get('email'),
      });

      var self = this;
      prom.save().then(function() {
        self.transitionTo('prom', prom);
      });
    }
  }
});
