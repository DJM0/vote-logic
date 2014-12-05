import Ember from 'ember';

export default Ember.ArrayController.extend({

  sortAscending: false,
  sortProperties: ['createdAt'],

  actions: {

    sort: function(property) {

      this.set('sortProperties', [property]);
      this.set('sortAscending', false);

    }

  }

});
