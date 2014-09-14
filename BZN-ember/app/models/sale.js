import DS from "ember-data";

export default DS.Model.extend({
  prom: DS.belongsTo('prom'),
  purchaseDate: DS.attr('date'),
  totalPrice: DS.attr('number'),
  items: DS.hasMany('item'),
});
