import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  storage: service('shared-storage'),

  init() {
    this._super(...arguments);

    // Save the application controller for use with other things
    this.storage.set('application-controller', this);
  }
});
