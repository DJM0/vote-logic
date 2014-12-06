import Ember from 'ember';

export default Ember.ObjectController.extend({

  needs: ['application'],

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

      if (this.get('note') !== '') {

        var note = this.store.createRecord('note', {
          'note': this.get('note')
        });

        this.set('note', '');

        this.get('notes').then(function(notes) {
          notes.pushObject(note);
          note.save();
        });

      }

    },

    remove: function() {

      var parent = this;

      this.get('model').destroyRecord().then(function() {
        parent.transitionToRoute('suggestions');
      });

    }

  }

});
