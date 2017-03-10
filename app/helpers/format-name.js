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

  /**
   * This is a module scope leak. Since we're caching state in the scope of the
   * module, it will never get cleaned up since the module isn't dereferenced.
   * Instead, we should (1) evaluate if a cache is even needed since the user
   * info might change, (2) cache primitives instead of references, or (3) use
   * a caching service that knows to reset itself on destruction.
   */
  cache.set(user, name);

  return name;
}

export default helper(formatName);
