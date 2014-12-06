import Ember from 'ember';

export default Ember.Controller.extend({

  isAdmin: function() {
    return false;
  }.property('App.isAdmin')

});
