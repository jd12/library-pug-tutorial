var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/info', function(req, res, next) {
  res.render('book-info', { title: 'Book Info' });
});

router.get('/add-review', function(req, res, next) {
  res.render('book-review-form', { title: 'Review Book' });
});


module.exports = router;
