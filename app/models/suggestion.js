import DS from 'ember-data';

export default DS.Model.extend({

  suggestion: DS.attr('string'),
  description: DS.attr('string'),
  email: DS.attr('string'),
  notes: DS.hasMany('note', { async: true }),
  votes: DS.attr('number', { readOnly: true }),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')

});
