var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let ejs = require('ejs');

var indexRouter = require('./routes/action/index');
// var usersRouter = require('./routes/users');
var loginRouter = require('./routes/action/login');
var myhomeRouter = require('./routes/action/myhome');
// let home3Router = require('./routes/action/home3');
let defRouter = require('./routes/action/def');
let loginAdminRouter = require('./routes/action/loginAdmin');
let indexAdminRouter = require('./routes/action/indexAdmin');
let adminlistRouter = require('./routes/action');
let memberlistRouter = require('./routes/action/member_list');
let productRouter = require('./routes/action/product-list');
let aboutRouter = require('./routes/action/about');
let contactRouter =require('./routes/action/contact');
let blogRouter = require('./routes/action/blog');
let blogDetailsRouter = require('./routes/action/blog-details');
let singleRouter = require('./routes/action/single-product-countdown');
let shopRouter = require('./routes/action/shop');
let accountRouter = require('./routes/action/my-account');
let cartRouter = require('./routes/action/cart');
let checkoutRouter = require('./routes/action/checkout');
let delRouter = require('./routes/action/del')
let cartdelRouter = require('./routes/action/cartdel');
let modificationRouter = require('./routes/action/modification');
let searchRouter= require('./routes/action/search')
// let modifiRouter = require('./routes/action/modifi')
let addblogRouter = require('./routes/action/addblog');
let delblogRouter = require('./routes/action/delblog');
let searchblogRouter = require('./routes/action/searchblog');
let animalsblogmanageRouter = require('./routes/action/animalsblogmanage');
let modificationblogRouter = require('./routes/action/modificationblog');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.engine('.html',ejs.__dirname)
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/def',defRouter);
// app.use('/index1', indexRouter1);
app.use('/index', indexRouter);
// app.use('/users', usersRouter);
app.use('/', loginRouter);
app.use('/myhome', myhomeRouter);
// app.use('/home3', home3Router);
// app.use('/single-post')
app.use('/loginAdmin', loginAdminRouter);
app.use('/indexAdmin', indexAdminRouter);
app.use('/admin-list', adminlistRouter);
app.use('/member-list', memberlistRouter);
app.use('/product-list', productRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/blog', blogRouter);
app.use('/blog-details', blogDetailsRouter)
app.use('/single-product-countdown', singleRouter);
app.use('/shop', shopRouter);
app.use('/my-account', accountRouter);
app.use('/cart', cartRouter);
app.use('/checkout', checkoutRouter);
app.use('/del', delRouter);
app.use('/cartdel', cartdelRouter);
app.use('/modification', modificationRouter);
app.use('/search', searchRouter);
app.use('/delblog', delblogRouter);
app.use('/addblog',addblogRouter);
app.use('/searchblog', searchblogRouter);
app.use('/animalsblogmanage', animalsblogmanageRouter);
app.use('/modificationblog', modificationblogRouter);
// app.use('/modifi', modifiRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
