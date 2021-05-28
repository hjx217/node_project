var express = require('express');
var router = express.Router();
let mysql = require('mysql');
let connection = require('../until/connection');
const Title = require('../bean/title');

router.get('/', (req, res) => {
  connection.query("select * from tab_title", (error, results, fields) => {
    
    res.render('home', {data:results})
    return results;
  })
router.post('/', (req, res) => {
  res.render('home')
})
})

module.exports = router;
