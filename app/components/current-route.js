import Ember from 'ember';

const {
  computed: {
    readOnly
  },
  inject: {
    service
  }
} = Ember;

export default Ember.Component.extend({
  storage: service('shared-storage'),

  init() {
    this._super(...arguments);
    this.set('appController', this.get('storage').get('application-controller'));
  },

  currentRoute: readOnly('appController.currentPath')
});
