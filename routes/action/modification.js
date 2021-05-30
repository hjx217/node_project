var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('modification')
});
router.post('/', function(req, res, next) {
    res.render('modification')
});
module.exports = router;