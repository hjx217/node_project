var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('single-product-countdown')
});
router.post('/', function(req, res, next) {
    res.render('single-product-countdown')
});
module.exports = router;