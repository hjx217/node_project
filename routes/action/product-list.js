var express = require('express');
var router = express.Router();
let mysql = require('mysql');
let connection = require('../until/connection');


const Title = require('../bean/title');

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query("select * from tab_title", (error, results, fields) => {
    res.render('product-list', {list:results})
    return results;
  })
  
});
// router.get('/del', (req, res) => {
//   console.log(req.query.id)
    // let d = new Title(req.body.image, req.body.disconut, req.body.title, req.body.newprice, req.body.oldprice);
  //   connection.query("delect from tab_title where id = ' "+id+"'",(error, results, fields) => {
  //   res.redirect('indexAdmin')
  //   })
    
  // })

 

router.get('/add',(req, res) => {
    res.render('add')
})
router.post('/add', (req, res) => {
    let product = new Title(req.body.image, req.body.discount, req.body.title, req.body.newprice, req.body.oldprice);
    connection.query('insert into tab_title(image, discount, title, newprice, oldprice) value(?,?,?,?,?)',[product.image, product.discount, product.title, product.newprice, product.oldprice]);
    res.redirect('/product-list')
})


router.post('/', function(req, res, next) {
    res.render('product-list')
});
module.exports = router;