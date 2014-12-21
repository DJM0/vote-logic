/* global $:false */

import Ember from 'ember';

export default Ember.Component.extend({

  mouseOver: function(el) {

    $(el.target).addClass('vote-circle-active');

    var that = this;

    var timer = Ember.run.later((function() {

      $(el.target).removeClass('vote-circle-active');
      that.sendAction();

    }), 1000);

    this.set('timer', timer);

  },

  mouseOut: function(el) {

    $(el.target).removeClass('vote-circle-active');

    Ember.run.cancel(this.get('timer'));

  }

});
