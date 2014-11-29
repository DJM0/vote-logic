import Ember from 'ember';

export default Ember.ObjectController.extend({

  actions: {

    vote: function(suggestion) {

      var item = this.store.createRecord('vote', {
        'votes': 1
      });

      var vote = suggestion.get('votes').pushObject(item);

      vote.save().then(function() {
        suggestion.reload();
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
