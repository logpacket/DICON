var mongoose = require('mongoose');
var schema = mongoose.Schema;

var corpSchema =  new schema({
    corpname:{type:String},
    corpnum:{type:Number},
    kindcorp:{type:Number},
    homepage:{type:String},
    finance:{type:Number},
    market:{type:Number},
    strockcode:{type:Number},
    year:{type:Number},
    workers:{type:Number},
    cartegory:{type:Number},
    introduce:{type:String},
    phone:{type:Number},
    mailaddr:{type:String}
});

var model=mongoose.model('corp',corpSchema);
module.exports = model;