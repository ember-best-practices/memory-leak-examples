import Route from '@ember/routing/route';
import populateStore from '../mock-data';

export default Route.extend({
  model() {
    let store = this.store;
    populateStore(store);

    let user = store.peekRecord('user', '1337');
    let updates = store.peekAll('update').filter(update => update.get('user.id') !== '1337');

    return {
      user,
      updates
    };
  }
});
