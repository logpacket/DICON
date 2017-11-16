var express = require('express');
var router = express.Router();
var model = require('./corpmodel');
var multer = require('multer');
var upload = multer({destination:'logo/'});

router.get('/',function(req,res){
    res.render('registr');
}).post('/',upload.single('img'),function(req,res){
    corp = new model({
        corpname:req.body.corpname,
        corpnum:req.body.corpnum,
        kindcorp:req.body.kindcorp,
        homepage:req.body.homepage,
        finance:req.body.finance,
        market:req.body.market,
        strockcode:req.body.strockcode,
        year:req.body.year,
        workers:req.body.workers,
        cartegory:req.body.cartegory,
        introduce:req.body.introduce,
        phone:req.body.phone,
        mailaddr:req.body.mailaddr
    });
    model.findOne({corpnum:req.body.corpnum},function(err,result){
        if(err){
            console.log('error'+err);
            throw err;
        }
        if(!result){
            corp.save(function(err){
                if(err){
                    console.log("save failed"+err);
                    throw err;
                }else {
                    console.log("save success");
                    res.json({save:'success'});
                }
            });
        }else {
            res.json({
                success:false,
                reason:'Already_used_number'
            });
        }
    });
});
module.exports = router;