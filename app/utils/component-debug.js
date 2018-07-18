import Component from '@ember/component';
import config from '../config/environment';

Component.reopen({
  init() {
    let component = this;
    this._super(...arguments);

    if (config.environment !== 'production') {
      let id = component.toString();
      window.lastComponentRendered = function() { return id; };
    }
  }
});
