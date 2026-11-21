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


module.exports = router;
