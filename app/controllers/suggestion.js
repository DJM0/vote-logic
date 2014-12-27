import Ember from 'ember';

export default Ember.ObjectController.extend({

  needs: ['application'],

  actions: {

    vote: function() {

      this.set('pending', true);

      var suggestion = this.get('model');

      var vote = this.store.createRecord('vote', {
        'votes': 1
      });

      var count = this.get('total') + 1;
      suggestion.set('total', count);

      var parent = this;

      this.get('votes').then(function(votes) {
        votes.pushObject(vote);
        vote.save().then(function(){
          parent.set('pending', false);
          parent.set('voted', true);
        });
      });

    },

    comment: function() {

      var comment = this.get('note');

      if (comment !== undefined && comment !== '') {

        var note = this.store.createRecord('note', {
          'note': comment
        });

        this.set('note', '');

        this.get('notes').then(function(notes) {
          notes.pushObject(note);
          note.save();
        });

      }

    },

    tag: function() {

      var suggestion = this.get('model');

      this.store.find('tag', { tag: "New" }).then(function(items) {
        var tag = items.objectAt(0);

        suggestion.get('tags').then(function(tags) {
          tags.pushObject(tag);
          tag.save();
        });

      });

    },

    remove: function() {

      var parent = this;

      this.get('model').destroyRecord().then(function() {
        parent.transitionToRoute('suggestions');
      });

    }

  }

});
