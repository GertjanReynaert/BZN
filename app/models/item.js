import DS from "ember-data";

export default DS.Model.extend({
  article: DS.belongsTo('article'),
  amounts: DS.hasMany('articleAmount'),
});
