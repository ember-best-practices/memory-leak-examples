import Ember from 'ember';

export default Ember.Component.extend({
  didReceiveAttrs() {
    if (!this.hasEventListener && this.get('onScroll')) {
      this.hasEventListener = true;

      /**
       * This is a callback leak. Since callback functions for things like event
       * listeners and interval timers are retained by reference elsewhere, you
       * must be careful to unregister them when no longer needed or ensure that
       * the context they're registered with is destroyed. In this case, Since
       * `window` is never destroyed/removed, this callback will continue to
       * exist forever and since its callback closes over a reference to this
       * component, we have a bad memory leak. The solution is to remove this
       * event listener in `willDestroy`.
       */
      window.addEventListener('scroll', (...args) => this.get('onScroll')(...args));
    }
  }
});
