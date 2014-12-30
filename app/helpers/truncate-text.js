import Ember from 'ember';

export function truncateText(input, options) {
  
  var limit = options.hash.limit || 100;
  
  if (input.length > limit) {
    input = input.substr(0, limit - 3) + "...";
  }

  return input;

}

export default Ember.Handlebars.makeBoundHelper(truncateText);
