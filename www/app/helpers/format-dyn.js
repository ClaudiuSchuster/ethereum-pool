import Ember from 'ember';

export function formatDyn(value) {
  return value[0].substring(value[1], value[2]) + value[4] + value[0].substring(value[3]);
}

export default Ember.Helper.helper(formatDyn);
