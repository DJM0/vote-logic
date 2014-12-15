import Ember from 'ember';

export default Ember.Component.extend({

  mouseOver: function(el){

    $(el.target).addClass('vote-circle-active');

    var that = this;

    Ember.run.later((function() {
      if ($(el.target).hasClass('vote-circle-active')) {
        console.log(that);
        that.sendAction();
      }
    }), 1200);

  },

  mouseOut: function(el){

    $(el.target).removeClass('vote-circle-active');

  }

});
