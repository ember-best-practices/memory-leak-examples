import { capitalize } from '@ember/string';
import { helper } from '@ember/component/helper';

export function capitalizeHelper([str]) {
  return capitalize(str);
}

export default helper(capitalizeHelper);
