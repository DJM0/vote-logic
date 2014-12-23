import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    submit: function() {
      
      var suggestion = this.store.createRecord('suggestion', {

        suggestion: this.get('suggestion'),
        description: this.get('description'),
        authorEmail: this.get('authorEmail')

      });

      this.transitionTo('suggestion', suggestion.save());

    }

  }

});
