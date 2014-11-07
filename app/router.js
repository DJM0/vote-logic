import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.resource('features', function() {

    this.resource('feature', { path: '/:feature_id' }, function() {
      
    });

  });

  this.route('create');

});

export default Router;
