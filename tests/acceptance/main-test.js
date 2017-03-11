import { test } from 'qunit';
import moduleForAcceptance from 'memory-leak-examples/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | main');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
