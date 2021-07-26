const express = require('express');
const router = express.Router();
const beersRoutes = require('./routes/beers');

app.use("/api/v1/beers/", beersRoutes);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const beerRoutes = require('./beers');
module.exports = function(app, db) {
  beerRoutes(app, db);
};

module.exports = router;