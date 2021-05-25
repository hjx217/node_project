var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('member-list')
});
router.post('/', function(req, res, next) {
    res.render('member-list')
});
module.exports = router;