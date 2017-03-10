import Ember from 'ember';
import config from '../config/environment';

Ember.Component.reopen({
  /**
   * This is an example of a scope leak. This type of leak is not immediately
   * apparent since the one value being used in the window function is a
   * primitive value. However, since that function still has access to the
   * `component` variable in the enclosing scope, its reference will be
   * retained. To solve this, we should move the function declaration into a
   * different scope.
   */
  init() {
    let component = this;
    component._super(...arguments);

    if (config.environment !== 'production') {
      let id = component.toString();
      window.lastComponentRendered = function() { return id; };
    }
  }
});
