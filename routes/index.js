let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Student Activity Tracker' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Student Activity Tracker' });
});
/* GET About page. */
router.get('/aboutus', function(req, res, next) {
  res.render('index', { title: 'About us' });
});
/* GET Products page. */
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products' });
});
/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});
/* GET Contact us page. */
router.get('/contactus', function(req, res, next) {
  res.render('index', { title: 'Contact us' });
});

module.exports = router;
