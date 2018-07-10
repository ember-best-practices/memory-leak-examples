import Component from '@ember/component';
import { readOnly } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
  storage: service('shared-storage'),

  init() {
    this._super(...arguments);
    this.set('appController', this.storage.get('application-controller'));
  },

  currentRoute: readOnly('appController.currentPath')
});
