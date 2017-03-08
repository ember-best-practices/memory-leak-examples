import Ember from 'ember';

const SCROLL_COUNTER = new Ember.Map();
const SOME_STRING = 'HELLO';
let LAST_COMPONENT;

export default Ember.Component.extend({
  scrolledComponents: [],
  init() {
    this._super(...arguments);
    this.scrollCount = 0;
    this.other();
    SCROLL_COUNTER.set(this, { count: 0 });
  },

  other() {
    this.foo = () => this;
    window.foo = function() {
      return SOME_STRING;
    };

    setTimeout(() => console.log('5 minutes have passed'), 60 * 1000 * 5)
  },

  didScroll() {
    this.scrolledComponents.addObject(this);

    this.incrementProperty('scrollCount');
    LAST_COMPONENT = this;

    SCROLL_COUNTER.get(this).count++;
  },

  didInsertElement() {
    window.addEventListener('scroll', () => {
      this.didScroll();
    });

    setInterval(() => this.animate(), 1000/60);
  },

  animate() {
    if (this.isDestroyed === true) { return; }
    // some animation
  }
});
