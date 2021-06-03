var express = require('express');
var router = express.Router();
let mysql = require('mysql');
let connection = require('../until/connection');
const Title = require('../bean/title');
/* GET home page. */
// router.get('/', (req, res) => {
//   res.render('search')
// })
router.post('/', (req, res) => {
    console.log(req.body.title)
    let sql = `SELECT * FROM tab_title where title like '%${req.body.title}%'`
    // console.log(req.body.title);
      // let d = new Title(req.body.image, req.body.disconut, req.body.title, req.body.newprice, req.body.oldprice);
      connection.query(sql,(error, results, fields) => {
        if(error) throw error;
            // res.redirect('/product-list')
            res.render('product-list',{list:results} )
      })
})

module.exports = router;