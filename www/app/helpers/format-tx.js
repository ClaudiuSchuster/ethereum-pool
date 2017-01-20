import Ember from 'ember';

export function formatTx(value) {
  return value[0].substring(2, 7) + "..." + value[0].substring(61);
}

export default Ember.Helper.helper(formatTx);
