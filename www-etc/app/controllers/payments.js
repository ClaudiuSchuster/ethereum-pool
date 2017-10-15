import Ember from 'ember';

export default Ember.Controller.extend({
  lastPayment: function () {
    return this.get('model.payments').get('firstObject'); // or this.get('model.firstObject'); 
  }.property('model.payments.[]')
});
