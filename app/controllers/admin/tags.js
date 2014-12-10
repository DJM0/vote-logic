import Ember from 'ember';

export default Ember.ArrayController.extend({

  actions: {

    submit: function() {
    
      var tag = this.store.createRecord('tag', {

        tag: this.get('tag'),
        colour: this.get('colour')

      });

      tag.save();

    }

  }

});
