var express = require('express');
var router = express.Router();
let connection = require('../until/connection')

/* GET home page. */



router.get('/', function(req, res, next) {
    res.render('addblog')
});
router.post('/', function(req, res, next) {
    connection.query(`insert into tab_animals(image,blogTime,title,ptext) value('${req.body.image}', '${req.body.blogTime}', '${req.body.title}','${req.body.ptext}')`,(error, results, fields) => {
        if(error) throw error;
        res.redirect('/animalsblogmanage')
    })
  
});
module.exports = router;