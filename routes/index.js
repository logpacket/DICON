var express = require('express');
var router = express.Router();
var model = require('./corpmodel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
}).post('/ajax_response',function(req,res){
    corpname = req.body.corpname;
    model.findOne({corpname:corpname},function(err,result){
        if(err){
            console.log('error'+err);
            throw err;
        }
        if(result){
            res.json(
                {corpname:result.corpname},
                {homepage:result.homepage},
                {finance:result.finance},
                {market:result.market},
                {strockcode:result.strockcode}
                );
        }else {
            res.json({
                success:false,
                reason:'Do not find data'
            });
        }
    })
});


module.exports = router;
