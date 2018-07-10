
import { formatName } from 'memory-leak-examples/helpers/format-name';
import { module, test } from 'qunit';

module('Unit | Helper | format name', function() {
  test('it works', function(assert) {
    let result = formatName([42]);
    assert.ok(result);
  });
});

