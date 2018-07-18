import { get } from '@ember/object';
import { helper } from '@ember/component/helper';
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
