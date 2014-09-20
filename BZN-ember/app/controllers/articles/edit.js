import Ember from "ember";
import Rollback from "../../mixins/rollback";

export default Ember.ObjectController.extend(Rollback, {

  changeCode: Ember.computed('code', function() {
    return this.get('code');
  }),
  changeName: Ember.computed('name', function() {
    return this.get('name');
  }),
  changePrice: Ember.computed('price', function() {
    return this.get('price');
  }),
  changeKind: Ember.computed('kind', function() {
    return this.get('kind');
  }),

  actions: {
    save: function(){
      this.set('code', this.get('changeCode'));
      this.set('name', this.get('changeName'));
      this.set('price', this.get('changePrice'));
      this.set('kind', this.get('changeKind'));
      this.model.save().then(function() {
        console.warn('successfully edited article');
      });
    },

    'delete': function() {
      this.model.destroyRecord();
      this.transitionTo('articles.index');
    }
  }
});
