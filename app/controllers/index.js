import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    onScroll() {
      if (!this.isDestroyed) {
        this.set('scrollDistance', window.scrollY);
        this.set('scrollMax', document.body.scrollHeight - window.innerHeight);
      }
    }
  }
});
