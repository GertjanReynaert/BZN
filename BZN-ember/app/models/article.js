import DS from "ember-data";

export default DS.Model.extend({
  code: DS.attr('string'),
  name: DS.attr('string'),
  price: DS.attr('number'),
  kind: DS.attr('string')
});
