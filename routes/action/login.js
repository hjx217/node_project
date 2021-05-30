var express = require('express');
var path = require("path");
var mysql = require('mysql');
var fs = require('fs');

let connection = require('../until/connection');
const Blog = require('../bean/blog');
// let userLogin = require('../dao/sql')

var router = express.Router();

router.get('/register', (req,res) => {
    
    res.render('register')
});
router.get('/login',function(req,res){
    res.render('login')
    //_dirname:当前文件的路径，path.join():合并路径
})
router.get('/home', (req, res) => {
    res.render('home')
})
/**
*登录验证功能
*/
router.post('/login',function(req,res){
    var username = req.body.username
    var password = req.body.password
    var query1 = "select username,password from tab_blog where username='"+username+"' and password='"+password+"'";
    connection.query(query1,function(err,result){
        if (err) throw err;
        console.log("!!!",result)
        if(result.length==0){
            res.render('def')
        }else{res.render('home')}
    })

});
/***
 * 注册功能
 */
router.post('/register',function(req, res, next){
    let blog = new Blog(req.body.username, req.body.password, req.body.phone_number, req.body.email);
    connection.query("insert into tab_blog(username, password, phone_number, email ) value(?,?,?,?)",[blog.username, blog.password, blog.phone_number, blog.email]);
        res.render('index')

})
module.exports = router;
