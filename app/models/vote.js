import DS from 'ember-data';

export default DS.Model.extend({

  suggestion: DS.attr('string'),
  votes: DS.attr('number'),
  email: DS.attr('string'),

});
