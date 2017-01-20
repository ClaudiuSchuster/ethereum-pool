import Ember from 'ember';

export default Ember.Controller.extend({
  applicationController: Ember.inject.controller('application'),
  stats: Ember.computed.reads('applicationController'),
  config: Ember.computed.reads('applicationController.config'),
  cachedLogin: Ember.computed('login', {
    get() {
      return this.get('login') || Ember.$.cookie('login');
    },
    set(key, value) {
      Ember.$.cookie('login', value);
      this.set('model.login', value);
      return value;
    }
  }),
  lastPayment: function () {
    return this.get('model.payments').get('firstObject'); // or this.get('model.firstObject'); 
  }.property('model.payments.[]')
});
