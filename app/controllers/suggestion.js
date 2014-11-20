import Ember from 'ember';

export default Ember.ObjectController.extend({

  total: function() {

    var votes = 0;

    this.get('votes').forEach(function(item){
      votes += item.get('votes');
    });

    return votes;

  }.property()

});
