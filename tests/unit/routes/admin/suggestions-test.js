import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:admin/suggestions', 'AdminSuggestionsRoute', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function() {
  var route = this.subject();
  ok(route);
});
