import Ember from 'ember';

const {
  LinkComponent
} = Ember;

/**
 * There are actually 2 issues causing problems here.
 */
export function initialize(instance) {
  /**
   * First, this LinkComponent will be reopened multiple times during tests
   * since initializers run each time an app is booted. To solve this, we should
   * simply execute this in the module scope.
   */
  LinkComponent.reopen({
    click() {
      this._super(...arguments);
      trackLink(this);
    }
  });

  /**
   * Second, this function closes over the application instance and since the
   * LinkComponent class is a global, this will be held onto indefinitely.
   * Instead we should pass in the needed, stateful information from the
   * LinkComponent when it invokes this function or just move this logic into
   * the LinkComponent without using the instance (we can use `getOwner`).
   */
  function trackLink(link) {
    let dest = link.get('targetRouteName');
    let src = instance.lookup('router:main').currentRouteName;

    // eslint-disable-next-line no-console
    console.log(`Taking link from ${src} to ${dest}`);
  }
}

export default {
  name: 'link-tracking',
  initialize
};
