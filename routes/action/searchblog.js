var express = require('express');
var router = express.Router();
let mysql = require('mysql');
let connection = require('../until/connection');
const Title = require('../bean/title');
/* GET home page. */
// router.post('/', (req, res) => {
//   res.render('searchblog')
// })
router.post('/', (req, res) => {
    // console.log(req.body.title);
      // let d = new Title(req.body.image, req.body.disconut, req.body.title, req.body.newprice, req.body.oldprice);
      connection.query(`select * from tab_animals where title  like '%${req.body.title}%'`,(error, results, fields) => {
        if(error) throw error;
        if(results)
            res.render('animalsblogmanage', {animals:results})
            // res.render('product-list',{list:results} )
      })
})

module.exports = router;