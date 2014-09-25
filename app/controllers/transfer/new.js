import Ember from "ember";

export default Ember.ObjectController.extend({
  currentDate: function() {
    return moment().format('DD.MM.YYYY');
  }.property(),

  actions: {
    save: function(){
      var transfer = this.store.createRecord('transfer', {
        date: this.get('currentDate'),
      });

      var self = this;
      transfer.save().then(function() {
        self.transitionTo('transfer.edit', transfer);
      });
    }
  }
});
