import Ember from 'ember';

const {
  inject: {
    service
  }
} = Ember;

export default Ember.Controller.extend({
  storage: service('shared-storage'),

  init() {
    this._super(...arguments);

    // Save the application controller for use with other things
    this.get('storage').set('application-controller', this);
  },

  actions: {
    onScroll() {
      this.set('scrollDistance', window.scrollY);
    }
  }
});
