var express = require('express');
var router = express.Router();
var model = require('./corpmodel');

router.get('/:a',function(req,res){
    model.findOne({corpnum:req.param(a)},function(err,result){
        if(err){
            console.log('error'+err);
            throw err;
        }
        if(result){
            res.render('view',
                {corpname:result.corpname},
                {homepage:result.homepage},
                {finance:result.finance},
                {market:result.market},
                {strockcode:result.strockcode},
                {year:result.year},
                {kindcorp:result.kindcorp},
                {phone:result.phone}
                )
        }else {
            res.json({
                success:false,
                reason:'없어 시발련아'
            });
        }
    });
});

module.exports = router;
