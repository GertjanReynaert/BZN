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

    if (result.substring(0, 1) === "-") {
      result = result.substring(1);
    }

    if (result.substring(result.length - 1) === "-") {
      result = result.substring(0, result.length - 1);
    }

    return result;
  }.property('name'),

  displayPrice: function() {
    var price = this.get('price');
    price = price.toFixed(2);
    return "€ " + price;
  }.property('price')
});
