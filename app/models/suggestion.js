import DS from 'ember-data';

export default DS.Model.extend({

  suggestion: DS.attr('string'),
  description: DS.attr('string'),
  authorEmail: DS.attr('string'),
  votes: DS.hasMany('vote'),
  total: DS.attr('number', {readOnly: true}),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')

});
