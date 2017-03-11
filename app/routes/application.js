import Ember from 'ember';
import populateStore from '../mock-data';

export default Ember.Route.extend({
  model() {
    let store = this.get('store');
    populateStore(store);

    let user = store.peekRecord('user', '1337');
    let updates = store.peekAll('update').filter(update => update.get('user.id') !== '1337');

    return {
      user,
      updates
    };
  }
});
