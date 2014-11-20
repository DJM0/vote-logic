import DS from 'ember-data';

export default DS.Model.extend({

  suggestion: DS.attr('string'),
  description: DS.attr('string'),
  authorEmail: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  total: DS.attr('number'),
  votes: DS.hasMany('vote')
  
});
