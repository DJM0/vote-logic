import DS from 'ember-data';

export default DS.Model.extend({

  suggestion: DS.attr('string'),
  description: DS.attr('string'),
  email: DS.attr('string'),
  votes: DS.hasMany('vote', { async: false }),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')

});
