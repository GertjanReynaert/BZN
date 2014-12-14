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

      var createItem = function(prom, article, callback) {
        var item = self.store.createRecord('item', {
          prom: prom,
          article: article
        });
        item.save().then(function(item) {
          callback(item);
        });
      };

      var createArticleAmount = function(item) {
        var articleAmount = self.store.createRecord('articleAmount', {
          amount: 0,
          from: new Date(),
          item: item
        });
        articleAmount.save();
      };

      article.save().then(function(article) {
        self.store.find('prom').then(function(proms) {
          for(var i = 0; i < proms.get('length'); i++) {
            createItem(proms.content[i], article, createArticleAmount);
          }
        });

        self.transitionTo('articles.edit', article);
      });
    }
  }
});
