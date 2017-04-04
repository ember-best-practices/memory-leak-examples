import Ember from 'ember';

const {
  get,
  Map,
  Helper: {
    helper
  }
} = Ember;
const cache = new Map();

export function formatName([user]) {
  if (cache.get(user)) {
    return cache.get(user);
  }

  let name = `${get(user, 'firstName')} ${get(user, 'lastName')}`;

  cache.set(user, name);

  return name;
}

export default helper(formatName);
