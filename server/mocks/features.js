module.exports = function(app) {
  var express = require('express');
  var featuresRouter = express.Router();
  featuresRouter.get('/', function(req, res) {
    res.send({"features":[
      {
        "id": 1,
        "name": "Test Feature",
        "description": "This is a test :)",
        "votes": 21
      }, {
        "id": 2,
        "name": "Cool feature",
        "description": "Another test",
        "votes": 2
      }
    ]});
  });
  app.use('/api/features', featuresRouter);
};
