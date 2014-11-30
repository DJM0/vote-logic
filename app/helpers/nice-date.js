import Ember from 'ember';

export function niceDate(date) {
  return moment(date).fromNow(); 
}

export default Ember.Handlebars.makeBoundHelper(niceDate);
