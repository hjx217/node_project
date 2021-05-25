var express = require('express');
var router = express.Router();
let mysql = require('mysql');
let connection = require('./until/connection');
const Blog = require('./bean/blog')
/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query("select * from tab_blog", (error, results, fields) => {
    res.render('member-list', {list:results})
    return results;
  })
  
});
router.post('/', function(req, res, next) {
    res.render('member-list')
});
module.exports = router;