import Ember from 'ember';

export function formatAddr(value) {
  return value[0].substring(2, 7) + "..." + value[0].substring(37);
}

export default Ember.Helper.helper(formatAddr);
