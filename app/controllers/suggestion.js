import Ember from 'ember';

export default Ember.ObjectController.extend({

  actions: {

    vote: function() {
      console.log('vote!');
    }

  }

});
