import LinkComponent from '@ember/routing/link-component';

export function initialize(instance) {
  LinkComponent.reopen({
    click() {
      this._super(...arguments);
      trackLink(this);
    }
  });

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
