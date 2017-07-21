/**
 * Created by Administrator on 2017/5/22/022.
 */

var mongoose = require('./model');

var zixunSchema = new mongoose.Schema({
   type:{type:String},
    src:{type:String},
    title:{type:String},
    p:{type:String}
});

var zixunMode  = mongoose.model('zixun',zixunSchema);

//exports.zixun = function(data,callback){
//    zixunMode.create(data,function(err){
//        if(err){
//            callback(err,'失败')
//        }else{
//            callback(data,'成功')
//        }
//    })
//};

exports.zixun = function(data,callback){
    zixunMode.find(data,function(err,doc){
        if(err){
            callback(err,'失败')
        }else{
            callback(doc,'成功')
        }
    })
};