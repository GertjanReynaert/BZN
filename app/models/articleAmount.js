import DS from "ember-data";

export default DS.Model.extend({
  amount: DS.attr('number'),
  from: DS.attr('date'),
  until: DS.attr('date'),

  item: DS.belongsTo('item'),
});
