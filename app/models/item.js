import DS from "ember-data";

export default DS.Model.extend({
  prom: DS.belongsTo('prom'),
  article: DS.belongsTo('article'),
  amounts: DS.hasMany('articleAmount'),
});
