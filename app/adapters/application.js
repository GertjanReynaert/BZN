import DS from 'ember-data';

export default DS.FirebaseAdapter.extend({
    firebase: new Firebase("https://bzn.firebaseio.com")
});
