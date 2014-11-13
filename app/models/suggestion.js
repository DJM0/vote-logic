import DS from 'ember-data';

export default DS.Model.extend({

  suggestion: DS.attr('string'),
  description: DS.attr('string'),
  votes: DS.attr('number', { defaultValue: 0 })
  
});
