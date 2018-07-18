import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | shared storage', function(hooks) {
  setupTest(hooks);

  test('smoke test', function(assert) {
    let service = this.owner.lookup('service:shared-storage');

    service.set('subject', service);
    service.set('falsy', '');

    assert.strictEqual(service.get('subject'), service, 'set/get - works for truthy values');
    assert.strictEqual(service.get('falsy'), '', 'set/get - works for falsy values');

    assert.strictEqual(service.has('subject'), true, 'has - works for truthy values');
    assert.strictEqual(service.has('falsy'), true, 'has - works for false values');

    service.remove('subject');
    service.remove('falsy');

    assert.strictEqual(service.has('subject'), false, 'remove - works for truthy values');
    assert.strictEqual(service.has('falsy'), false, 'remove - works for false values');

    service.set('subject', service);
    service.set('falsy', '');

    assert.strictEqual(service.get('subject'), service, 'set/get - works for reinstated truthy values');
    assert.strictEqual(service.get('falsy'), '', 'set/get - works for reinstated falsy values');
  });
});
