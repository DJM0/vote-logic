import Ember from 'ember';

export default Ember.ObjectController.extend({

  needs: ['application'],

  actions: {

    removeNote: function() {

      this.get('model').destroyRecord();

    }

  }
});
