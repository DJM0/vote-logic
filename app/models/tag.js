import DS from 'ember-data';

export default DS.Model.extend({

  tag: DS.attr('string'),
  colour: DS.attr('string'),
  suggestions: DS.hasMany('suggestion', { async: true })
  
});
