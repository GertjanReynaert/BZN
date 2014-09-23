import DS from "ember-data";

export default DS.Model.extend({
  code: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),

  street: DS.attr('string'),
  address: DS.attr('string'),
  city: DS.attr('string'),
  zipcode: DS.attr('string'),

  phone: DS.attr('string'),
  cellphone: DS.attr('string'),
  email: DS.attr('string'),

  stock: DS.hasMany('item'),

  slug: function() {
    var result = this.get('firstName').toLowerCase();
    result += ' ' + this.get('lastName').toLowerCase();

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
  }.property('firstName', 'lastName'),

  name: function() {
    return this.get('lastName') + ' ' + this.get('firstName');
  }.property('firstName', 'lastName')
});
