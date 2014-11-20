import Ember from 'ember';

export default Ember.ObjectController.extend({

  actions: {

    vote: function(suggestion) {

      var item = this.store.createRecord('vote', {
        'comments': 'Hello Wolrd',
        'votes': 1
      });

      var vote = suggestion.get('votes').pushObject(item);

      vote.save();

    }

  },

  total: function() {

    var votes = 0;

    this.get('votes').forEach(function(item){
      votes += item.get('votes');
    });

    return votes;

  }.property('total')

});
