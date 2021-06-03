var express = require('express');
var router = express.Router();
let mysql = require('mysql');
let connection = require('../until/connection');
const Title = require('../bean/title');
let dt = require('../dao/sql')


// connection.connect(err =>{
//   if(err) throw err;
//   console.log("mysql连接成功");
// })

router.get('/', function(req, res, next){
  // res.render('hello')
  // console.log(111);
  connection.query("select * from tab_title", (error, results, fields) => {
    if(error) throw error;
    res.render('myhome', {data:results})
    return results;
  })
});


module.exports = router;
