import Component from '@ember/component';
import config from '../config/environment';

Component.reopen({
  init() {
    this._super(...arguments);

    let component = this;

    if (config.environment !== 'production') {
      let id = component.toString();
      window.lastComponentRendered = function() { return id; };
    }
  }
});
