import Ember from 'ember';
import { initialize } from 'memory-leak-examples/instance-initializers/link-tracking';
import { module, test } from 'qunit';
import destroyApp from '../../helpers/destroy-app';

module('Unit | Instance Initializer | link tracking', {
  beforeEach() {
    Ember.run(() => {
      this.application = Ember.Application.create();
      this.appInstance = this.application.buildInstance();
    });
  },
  afterEach() {
    Ember.run(this.appInstance, 'destroy');
    destroyApp(this.application);
  }
});

test('it works', function(assert) {
  initialize(this.appInstance);
  assert.ok(true);
});
