import DS from 'ember-data';

export default DS.Model.extend({

  suggestion: DS.attr('string'),
  description: DS.attr('string'),
  email: DS.attr('string'),
  total: DS.attr('number', { readOnly: true }),
  votes: DS.hasMany('vote', { async: true }),
  notes: DS.hasMany('note', { async: true }),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')

});
