var express = require('express');
var router = express.Router();
var model = require('./corpmodel');
/* GET home page. */
router.get('/', function(req, res) {
    res.render('d',
        {corpname:'a'},
        {homepage:'a'},
        {finance:'a'},
        {market:'a'},
        {strockcode:'a'},
        {year:'a'},
        {kindcorp:'a'},
        {phone:'a'});
}).post('/',function(req,res){
    res.redirect('../view/:'+req.body.corpnum);
});

module.exports = router;
