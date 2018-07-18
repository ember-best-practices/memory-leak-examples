import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | list view', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a series of items as cards', async function(assert) {
    this.set('items', [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }]);
    await render(hbs`
      {{#list-view items=items as |item|}}
        <p class="name" data-test-id={{item.id}}>{{item.name}}</p>
      {{/list-view}}
    `);

    assert.dom('[data-test-id="1"]').hasText('foo');
    assert.dom('[data-test-id="2"]').hasText('bar');
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
