import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('list-view', 'Integration | Component | list view', {
  integration: true
});

test('it renders a series of items as cards', function(assert) {
  this.set('items', [{ name: 'foo' }, { name: 'bar' }]);
  this.render(hbs`
    {{#list-view items=items as |item|}}
      <p class="name">{{item.name}}</p>
    {{/list-view}}
  `);

  assert.equal(this.$('.name').text().trim(), 'foobar');
});

test('it sets up a scroll handler', function(assert) {
  function scrollHandler() {
    assert.step('scroll');
  }

  this.set('items', [{ name: 'foo' }, { name: 'bar' }]);
  this.set('scrollHandler', scrollHandler);

  this.render(hbs`
    {{#list-view onScroll=scrollHandler items=items as |item|}}
      <p class="name">{{item.name}}</p>
    {{/list-view}}
  `);

  window.dispatchEvent(new CustomEvent('scroll'));

  assert.verifySteps(['scroll']);
});
