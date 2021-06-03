var express = require('express');
var router = express.Router();
let connection = require('../until/connection')
/* GET home page. */
router.get('/:id', function(req, res, next) {
  connection.query(`select * from tab_animals where id = ${req.params.id}`,(error, results, fields) => {
      if(error) throw error;
      if(results){
        res.render('modificationblog',{animals:results[0]})

      }
  })
});
router.post('/', function(req, res, next) {
  // console.log(req.body.id);
  connection.query(`update tab_animals set image = ${req.body.image},blogTime = '${req.body.blogTime}',title = ${req.body.title},ptext = ${req.body.ptext} where id = ${req.body.id}`,(error, results ,fields) => {
      if(error) throw error;
      res.redirect('/animalsblogmanage')
  })
  // res.redirect('/product-list')
});
module.exports = router;