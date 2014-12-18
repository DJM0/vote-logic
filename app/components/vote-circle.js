/* global $:false */

import Ember from 'ember';

export default Ember.Component.extend({

  mouseOver: function(el){

    $(el.target).addClass('vote-circle-active');

    var that = this;

    Ember.run.later((function() {

      if ($(el.target).hasClass('vote-circle-active')) {

        $(el.target).removeClass('vote-circle-active');
        that.sendAction();

      }

    }), 1000);

  },

  mouseOut: function(el){

    $(el.target).removeClass('vote-circle-active');

  }

});
