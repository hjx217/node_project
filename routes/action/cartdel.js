var express = require('express');
var router = express.Router();
let connection = require('../until/connection');


router.get('/', (req, res) => {
    let id = req.query.id;
    connection.query(`delete from tab_cart where id = ${id}`, (error, results, fields) => {
      if(error) throw error;
      res.redirect('/cart')
    })
  })



module.exports = router;


