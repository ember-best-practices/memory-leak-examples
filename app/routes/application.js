import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').createRecord('user', {
      id: 1337,
      firstName: 'Scott',
      lastName: 'Pilgrim'
    });
  }
});
