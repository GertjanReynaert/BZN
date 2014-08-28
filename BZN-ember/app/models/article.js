import DS from "ember-data";

export default DS.Model.extend({
  code: DS.attr('string'),
  name: DS.attr('string'),
  price: DS.attr('number'),
  kind: DS.attr('string'),

  slug: function() {
    var result = this.get('name').toLowerCase();
    result = result.replace(/\s*@\s*/, ' at ');
    result = result.replace(/\s*&\s*/, ' en ');

    result = result.replace(/\s*[^A-Za-z0-9\.]\s*/g, '-');

    return result;
  }.property('name')
});
