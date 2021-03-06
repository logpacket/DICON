var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');

var index = require('./routes/index');
var register = require('./routes/register');
var register2 = require('./routes/register2');

var app = express();
var db = mongoose.connection;


db.on('err',console.error);
db.once('open',function(){
    console.log('connected to mongodb');
});
mongoose.connect("mongodb://localhost:27017/PXELEAD",function(err){
    if(err) {
        console.log('DB Error');
        throw err;
    }else{
        console.log('Connect sucess!');
    }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'rnpfqEnfqTPfqEptq',
    resave: false,
    saveUninitialized: true
}));

app.use('/', index);
app.use('/register',register);
app.use('/register2',register2);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
