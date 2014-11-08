module.exports = function(app) {
  var express = require('express');
  var suggestionsRouter = express.Router();
  suggestionsRouter.get('/', function(req, res) {
    res.send({"suggestions":[
      {
        "id": 1,
        "suggestion": "Test Feature",
        "description": "This is a test :)",
        "votes": 21
      }, {
        "id": 2,
        "suggestion": "Cool feature",
        "description": "Another test",
        "votes": 2
      }
    ]});
  });
  app.use('/api/suggestions', suggestionsRouter);
};
