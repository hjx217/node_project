var express = require('express');
var router = express.Router();
let connection = require('../until/connection');
let title = require('../bean/title');
const Title = require('../bean/title');


/* GET home page. */
router.get('/', ( req, res) => {
  connection.query(`select * from tab_cart`,(error, results, fields) => {
    res.render('cart', {cart:results})
  })
})
router.get('/:id', function(req, res, next) {
  // console.log(req.params.id)
  connection.query(`select image,title,newprice from tab_title where id = ${req.params.id}`,(error, results, fields) => {
    if(error) throw error;
    if(results)
    connection.query(`insert into tab_cart(image,product,price) value('${results[0].image}', '${results[0].title}', '${results[0].newprice}')`, (error, results1, fields) =>{
      if(error) throw error;
      // res.render('cart',{cart:results1[0]})
      res.redirect('/cart')
    })
    // res.render('cart', {cart:results});2
  })
});
router.post('/', function(req, res, next) {
  // let id = req.body.id;
  // let p = new Title(req.body.image, req.body.title,req.body.newprice);
  // connection.query(`insert into tab_cart(image,product,price) value(?,?,?)`,[p.image,p.title.p.newprice])
  // let id = req.body.id;
  // connection.query(``,(error, results, fields) => {
  //   if(error) throw error;
    res.render('cart')
  // })
});
module.exports = router;