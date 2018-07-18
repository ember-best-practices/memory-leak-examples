import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    onScroll() {
      if (!this.isDestroyed) {
        this.set('scrollDistance', window.scrollY);
        this.set('scrollMax', document.body.scrollHeight - window.innerHeight);
      }
    }
  }
});
