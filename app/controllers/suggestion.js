import Ember from 'ember';

export default Ember.ObjectController.extend({

  actions: {

    vote: function() {

      var suggestion = this.get('model');

      var vote = this.store.createRecord('vote', {
        'votes': 1
      });

      var count = this.get('total') + 1;
      suggestion.set('total', count);

      this.get('votes').then(function(votes) {
        votes.pushObject(vote);
        vote.save().then(function(){
          suggestion.reload();
        });
      });

    },

    comment: function() {

      var note = this.store.createRecord('note', {
        'note': this.get('note')
      });

      this.get('notes').then(function(notes) {
        notes.pushObject(note);
        note.save();
      });

    },

    remove: function() {

      this.get('model').deleteRecord();
      this.get('model').save().done(function() {
        this.transitionTo('suggestions');
      });

    }

  }

});
