# Answer Key

The following provides answers for each exercise in the training. It will specify which file the leak occurs in as well as a sample code change you can make to fix the leak.

## 1. app/services/shared-storage.js

```js
export default Ember.Service.extend({
  _data: Object.create(null)
});
```

```js
export default Ember.Service.extend({
  init() {
    this._data = Object.create(null);
  }
});
```

## 2. app/components/list-view.js

```js
export default Ember.Component.extend({
  didInsertElement() {
    if (this.get('onScroll')) {
      window.addEventListener('scroll', (...args) => this.get('onScroll')(...args));
    }
  }
});
```

```js
export default Ember.Component.extend({
  _onScrollHandler: null,

  didInsertElement() {
    if (this.get('onScroll')) {
      this._onScrollHandler = this.get('onScroll').bind(this);
      window.addEventListener('scroll', this._onScrollHandler);
    }
  },

  willDestroy() {
    if (this._onScrollHandler) {
      window.removeEventListener('scroll', this._onScrollHandler);
    }
  }
});
```

## 3. app/utils/component-debug.js

```js
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
```

```js
Ember.Component.reopen({
  init() {
    this._super(...arguments);

    if (config.environment !== 'production') {
      this._setupLastComponentRendered();
    }
  },

  _setupLastComponentRendered() {
    let id = this.toString();
    window.lastComponentRendered = function() { return id; };
  }
});
```

## 5a. app/instance-initializers/link-tracking.js

```js
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
```

```js
export function initialize() {
  LinkComponent.reopen({
    click() {
      this._super(...arguments);
      this.trackLink();
    },

    trackLink() {
      let dest = this.get('targetRouteName');
      let src = Ember.getOwner(this).lookup('router:main').currentRouteName;

      // eslint-disable-next-line no-console
      console.log(`Taking link from ${src} to ${dest}`);

    }
  });
}
```

## 5b. app/helpers/format-name.js

```js
const cache = new Map();

export function formatName([user]) {
  if (cache.get(user)) {
    return cache.get(user);
  }

  let name = `${get(user, 'firstName')} ${get(user, 'lastName')}`;

  cache.set(user, name);

  return name;
}
```

```js
export function formatName([user]) {
  return `${get(user, 'firstName')} ${get(user, 'lastName')}`;
}
```
