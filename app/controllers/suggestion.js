import Ember from 'ember';

export default Ember.ObjectController.extend({

  actions: {

    vote: function() {

      var suggestion = this.get('model');

      var vote = this.store.createRecord('vote', {
        'votes': 1
      });

      this.get('votes').then(function(votes) {
        votes.pushObject(vote);
        vote.save().then(function(){
          suggestion.reload();
        });
      });

    },

    comment: function(suggestion) {

      var item = this.store.createRecord('note', {
        'note': 'test'
      });

      var note = suggestion.get('notes').pushObject(item);

      note.save().then(function() {
        suggestion.reload();
      });

    }

  }

});
