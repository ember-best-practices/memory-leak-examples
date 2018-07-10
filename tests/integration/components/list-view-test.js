import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | list view', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a series of items as cards', async function(assert) {
    this.set('items', [{ name: 'foo' }, { name: 'bar' }]);
    await render(hbs`
      {{#list-view items=items as |item|}}
        <p class="name">{{item.name}}</p>
      {{/list-view}}
    `);

    let items = this.element.querySelectorAll('.name');
    assert.equal([...items].map(({ textContent }) => textContent).join(''), 'foobar');
  });

  test('it sets up a scroll handler', async function(assert) {
    function scrollHandler() {
      assert.step('scroll');
    }

    this.set('items', [{ name: 'foo' }, { name: 'bar' }]);
    this.set('scrollHandler', scrollHandler);

    await render(hbs`
      {{#list-view onScroll=scrollHandler items=items as |item|}}
        <p class="name">{{item.name}}</p>
      {{/list-view}}
    `);

    window.dispatchEvent(new CustomEvent('scroll'));

    assert.verifySteps(['scroll']);
  });
});
