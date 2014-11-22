import Ember from 'ember';

export default Ember.ObjectController.extend({

  actions: {

    vote: function(suggestion) {

      var item = this.store.createRecord('vote', {
        'note': 'Hello Wolrd',
        'votes': 1
      });

      var vote = suggestion.get('votes').pushObject(item);

      vote.save().then(function() {
        suggestion.reload();
      });

    }

  }

});
