import Ember from 'ember';

export default Ember.Mixin.create({
  beforeModel: function() {
    var model = this.get('controller.model');
    if (model) {
      model.rollback();
    }
  },

  deactivate: function() {
    var model = this.get('controller.model');
    if (!model.get('isDeleted')) {
      model.rollback();
    }
  },
});
