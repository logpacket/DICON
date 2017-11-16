var express = require('express');
var router = express.Router();
var model = require('./corpmodel');
var multer = require('multer');
var filter = require('./filter');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
    },
    filename: function (req, file, cb) {
        cb(null, req.body.corpname + '.png') // cb 콜백함수를 통해 전송된 파일 이름 설정
    }
});
var upload = multer({ storage: storage });

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
        mailaddr:req.body.mailaddr,
        logo:req.body.corpname+'.png'
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
    console.log(req.file);
});
module.exports = router;