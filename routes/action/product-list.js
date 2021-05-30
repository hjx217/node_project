var express = require('express');
var router = express.Router();
let mysql = require('mysql');
let connection = require('../until/connection');
const Blog = require('../bean/title');
const { route } = require('./hom');
const Title = require('../bean/title');
const { render } = require('../../app');
/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query("select * from tab_title", (error, results, fields) => {
    res.render('product-list', {list:results})
    return results;
  })
  
});
router.get('/del/:id', (req, res) => {
    // let d = new Title(req.body.image, req.body.disconut, req.body.title, req.body.newprice, req.body.oldprice);
    // connection.query('delect from tab_title where id = 1',(error, results, fields) => {
    // res.render('product-list', {list:results})
    // return results
    // })
    
  })
router.get('/', (req, res) => {
    let title = new Title(req.body.image, req.body.disconut, req.body.title, req.body.newprice, req.body.oldprice);
    connection.query()
});
router.get('/add',(req, res) => {
    res.render('add')
})
router.post('/add', (req, res) => {
    let product = new Title(req.body.image, req.body.disconut, req.body.title, req.body.newprice, req.body.oldprice);
    connection.query('insert into tab_title(image, discount, title, newprice, oldprice) value(?,?,?,?,?)',[product.image, product.disconut, product.title, product.newprice, product.oldprice]);
    res.redirect('/product-list')
})
router.post('/', function(req, res, next) {
    res.render('product-list')
});
module.exports = router;