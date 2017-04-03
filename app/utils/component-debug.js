import Ember from 'ember';
import config from '../config/environment';

Ember.Component.reopen({
  init() {
    let component = this;
    component._super(...arguments);

    if (config.environment !== 'production') {
      let id = component.toString();
      window.lastComponentRendered = function() { return id; };
    }
  }
});
