/**
 * Created by Administrator on 2017/5/22/022.
 */

var mongoose = require('./model');

var proSchema = new mongoose.Schema({
    type:{type:String},
    proTittle:{type:String},
    proPrie:{type:String},
    proHot:{type:String},
    zhangshu:{type:String},
    jiezhidata:{type:String}
});

var proMode  = mongoose.model('pro',proSchema);

//exports.pro = function(data,callback){
//    proMode.create(data,function(err){
//        if(err){
//            callback(err,'失败')
//        }else{
//            callback(data,'成功')
//        }
//    })
//};

exports.pro = function(data,callback){
    proMode.find(data,function(err,doc){
        if(err){
            callback(err,'失败')
        }else{
            callback(doc,'成功')
        }
    })
};