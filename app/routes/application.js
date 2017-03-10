import Ember from 'ember';
import populateStore from '../mock-data';

export default Ember.Route.extend({
  model() {
    let store = this.get('store');
    populateStore(store);

    return {
      user: store.peekRecord('user', 1337),
      updates: store.peekAll('update')
    };
  }
});
