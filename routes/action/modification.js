var express = require('express');
var router = express.Router();
let connection = require('../until/connection');

/* GET home page. */

// router.get('/',(req, res) => {
//     res.render('modification')
// })
router.get('/:id', function(req, res, next) {
  connection.query(`select * from tab_title where id = ${req.params.id}`,(error, results, fields) => {
      if(error) throw error;
      if(results){
        res.render('modification',{mo:results[0]})

      }
  })
});
router.post('/', function(req, res, next) {
    // console.log(req.body.id);
    connection.query(`update tab_title set image = ${req.body.image},discount = ${req.body.discount},title = ${req.body.title},newprice = ${req.body.newprice},oldprice = ${req.body.oldprice} where id = ${req.body.id}`,(error, results ,fields) => {
        if(error) throw error;
        res.redirect('/product-list')
    })
    // res.redirect('/product-list')
});
module.exports = router;