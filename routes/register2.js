var express = require('express');
var router = express.Router();
var model = require('./corpmodel');
var multer = require('multer');
var fs = require('fs');
var client = require('cheerio-httpcli');
var filter = require('./filter');
var py = require('python-shell');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/') // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
    },
    filename: function (req, file, cb) {
        cb(null, req.body.corpname + '.png') // cb 콜백함수를 통해 전송된 파일 이름 설정
    }
});
var upload = multer({ storage: storage });

router.get('/',function(req,res,next){
    res.render('registr2');
}).post('/',function(req,res,next){
    var option = {
        mode:'text',
        pythonPath:"C:\\Users\\packet\\AppData\\Local\\Programs\\Python\\Python36-32\\python.exe",
        scriptPath:'./routes',
        args:[req.body.strockcode]
    };
    py.run('/dart.py',option,function(err, results){
        if(err)
            throw err;
        else {
            if(results[0]){
                model.findOne({corpnum:results[0]},function(err,result){
                    if(err){
                        console.log(err);
                        throw err;
                    }
                    else
                    if(!result){
                        req.session.corpnum = results[0];
                        req.session.homepage = results[1];
                        req.session.phone = results[2];
                        req.session.year = results[3];
                        req.session.strockcode = results[4];
                        res.redirect('/register2/submit');
                    }else {
                        console.log('asdfas');
                        res.redirect('/');
                    }
                })
            }
        }
    });
}).get('/submit',function(req,res,next){
    res.render('registr2-2');
}).post('/submit',upload.single('img'),function(req,res,next){
    corp = new model({
        corpname:req.body.corpname,
        corpnum:req.session.corpnum,
        homepage:req.session.homepage,
        finance:req.body.finance,// <-
        market:req.body.market,// <-
        strockcode:req.session.strockcode,
        year:req.session.year,
        workers:req.body.workers,// <-
        cartegory:req.body.cartegory,// <-
        introduce:req.body.introduce,// <-
        phone:req.session.phone,
        mailaddr:req.body.mailaddr,// <-
        logo:req.body.corpname+'.png'// <-
    });
    model.findOne({corpnum:req.session.corpnum},function(err,result){
        if(err){
            console.log('error'+err);
            throw err;
        }
        if(!result){
            corp.save(function(err){
                if(err){
                    fs.unlink('public/images/'+req.body.corpname+'.png');
                    console.log("save failed"+err);
                    throw err;
                }else {
                    console.log("save success");
                }
            });
        }else {
            console.log('Already used');
            fs.unlink('public/images/'+req.body.corpname+'.png');
        }
    });
    console.log(req.file);
    res.redirect('/');
});
module.exports = router;