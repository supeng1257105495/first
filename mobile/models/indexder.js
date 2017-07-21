/**
 * Created by Administrator on 2017/5/26/026.
 */


var mongoose = require('./model');

var indexderSchema = new mongoose.Schema({
    type:{type:String},
    slidersrc:{type:String},
    title:{type:String}
});

var indexderMode = mongoose.model('indexder',indexderSchema);

//exports.indexder = function(data,callback){
//    indexderMode.create(data, function (err){
//      if(err){
//         callback(err,'失败')
//      }else{
//         callback(data,'成功')
//      }
//   })
//};


exports.indexder = function(data,callback){
    indexderMode.find(data,function(err,doc){
        if(err){
            callback(err,'失败')
        }else{
            callback(doc,'成功')
        }
    })
};