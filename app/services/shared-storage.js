import Ember from 'ember';

export default Ember.Service.extend({
  /**
   * This is a prototype reference leak. Since the reference is being stored on
   * the prototype, the object will never get cleaned up. Instead, we should be
   * setting the `_data` property on the instance during `init`.
   */
  _data: Object.create(null),

  set(key, value) {
    return this._data[key] = value;
  },

  get(key) {
    return this._data[key];
  },

  remove(key) {
    delete this._data[key];
  },

  has(key) {
    return key in this._data;
  }
});
