import Ember from 'ember';

export default Ember.ArrayController.extend({

  sortAscending: false,
  sortProperties: ['createdAt'],

  createdAtSort: function() {

    if (this.get('sortProperties')[0] === 'createdAt') {
      return 'btn btn-default active';
    } else {
      return 'btn btn-default';
    }

  }.property('sortProperties'),

  totalSort: function() {

    if (this.get('sortProperties')[0] === 'total') {
      return 'btn btn-default active';
    } else {
      return 'btn btn-default';
    }

  }.property('sortProperties'),

  actions: {

    sort: function(property) {

      this.set('sortProperties', [property]);
      this.set('sortAscending', false);

    }

  }

});
