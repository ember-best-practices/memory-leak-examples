import Ember from 'ember';

export default Ember.Service.extend({
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
