var express = require('express');
const connection = require('../until/connection');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    connection.query(`select * from tab_animals`, (error,results, fields) => {
        if(error) throw error;
        res.render('animalsblogmanage', {animals:results})
    })
  
});
router.post('/', function(req, res, next) {
    res.render('animalsblogmanage')
});
module.exports = router;