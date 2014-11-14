import Ember from 'ember';

export default Ember.ArrayController.extend({

  actions: {

    vote: function(item) {

      console.log(item.incrementProperty('votes'));

      item.save();

    }

  }

});
