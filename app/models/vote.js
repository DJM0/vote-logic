import DS from 'ember-data';

export default DS.Model.extend({

  suggestion: DS.belongsTo('suggestion'),
  votes: DS.attr('number'),
  comments: DS.attr('string'),
  email: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')

});
