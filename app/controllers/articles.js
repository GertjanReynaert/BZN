import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['code', 'name'],
  sortAscending: true
});
