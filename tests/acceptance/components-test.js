import { test } from 'qunit';
import moduleForAcceptance from 'memory-leak-examples/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | components');

test('visiting /components', function(assert) {
  visit('/components');

  andThen(function() {
    assert.equal(currentURL(), '/components');
  });
});
