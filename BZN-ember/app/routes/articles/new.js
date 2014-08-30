import Ember from "ember";

export default Ember.Route.extend({
  deactivate: function() {
    var controller = this.get('controller');
    controller.set('code', '');
    controller.set('name', '');
    controller.set('price', '');
    controller.set('kind', '');
  },

  actions: {
    save: function(){
      var controller = this.get('controller');
      var article = this.store.createRecord('article', {
        code: controller.get('code'),
        name: controller.get('name'),
        price: controller.get('price'),
        kind: controller.get('kind'),
      });

      var self = this;
      article.save().then(function() {
        self.transitionTo('articles.edit', article);
      });
    }
  }
});
