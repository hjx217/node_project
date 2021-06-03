var express = require('express');
var router = express.Router();
let connection = require('../until/connection')

/* GET home page. */
router.get('/:id', (req, res) => {
    let id = req.params.id
        // let d = new Title(req.body.image, req.body.disconut, req.body.title, req.body.newprice, req.body.oldprice);
        connection.query(`delete from tab_animals where id =${id} `,(error, results, fields) => {
          if(error) throw error;
        res.redirect('/animalsblogmanage')
        })
});
module.exports = router;