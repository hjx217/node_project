var express = require('express');
var router = express.Router();
let mysql = require('mysql');
let connection = require('../until/connection');
const Title = require('../bean/title');
/* GET home page. */
router.get('/:id', (req, res) => {
  let id = req.params.id
      // let d = new Title(req.body.image, req.body.disconut, req.body.title, req.body.newprice, req.body.oldprice);
      connection.query(`delete from tab_title where id =${id} `,(error, results, fields) => {
        if(error) throw error;
      res.redirect('/product-list')
      })
      
    })


module.exports = router;