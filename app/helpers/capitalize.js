import Ember from 'ember';

const {
  String: {
    capitalize
  },
  Helper: {
    helper
  }
} = Ember;

export function capitalizeHelper([str]) {
  return capitalize(str);
}

export default helper(capitalizeHelper);
