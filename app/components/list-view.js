import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    if (this.onScroll) {
      window.addEventListener('scroll', (...args) => this.onScroll(...args));
    }
  }
});
