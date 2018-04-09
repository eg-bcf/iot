const queries = require("../queries/leak_test");

module.exports = app => {

  app.post('/leak_test', function(req, res, next) {
    Promise.all(req.body.map( x =>
      queries.saveResults(x.liquid_id, x.test_id, x.value)
    ))
      .then(function(result) {
        res.json(result);
      })
    /*
    queries.saveResults(req.body[0].liquid_id, req.body[0].test_id, req.body[0].value)
      .then(function(result) {
        res.json(result);
      })
*/
  });
  app.get('/leak_test', function(req, res, next) {
    queries.Results().then(result =>
    res.json(result));
  });
};
