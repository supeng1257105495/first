/**
 * Created by Administrator on 2017/5/26/026.
 */
/**
 * Created by Administrator on 2017/5/26/026.
 */

var mongoose = require('./model');

var indexperSchema = new mongoose.Schema({
    type:{type:String},
    perfectsrc:{type:String},
    classify:{type:String},
    hot:{type:String},
    heart:{type:String},
    zan:{type:String},
    mess:{type:String},
    designerSrc:{type:String},
    designer:{type:String}
});

var indexperMode = mongoose.model('indexper',indexperSchema);

//exports.indexper = function(data,callback){
//    indexperMode.create(data, function (err){
//        if(err){
//            callback(err,'失败')
//        }else{
//            callback(data,'成功')
//        }
//    })
//};


exports.indexper = function(data,callback){
    indexperMode.find(data,function(err,doc){
        if(err){
            callback(err,'失败')
        }else{
            callback(doc,'成功')
        }
    })
};