import Ember from 'ember';

export default Ember.ArrayController.extend({

  actions: {

    vote: function(item) {

      var vote = this.store.createRecord('vote', {
        'suggestion': item.id,
        'email': 'hello@davidmaitland.me',
        'votes': 3
      });

      vote.save().then(function(vote){
        item.get('votes').pushObject(vote);
      });


    }

  }

});
