var express = require('express');
var router = express.Router();
var model = require('./corpmodel');

/* GET home page. */
router.get('/', function(req, res, next) {
    model.find({}, function (err, corps) {
        if (err) {
            console.log('error'+err);
            throw err;
        }
        if (corps) {
            res.render('index', {corps: corps});
        } else {
            res.status(404).send('nothing to show');
        }
    });
})


module.exports = router;
