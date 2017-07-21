/**
 * Created by Administrator on 2017/5/26/026.
 */
/**
 * Created by Administrator on 2017/5/26/026.
 */


var mongoose = require('./model');

var designdesSchema = new mongoose.Schema({
    type:{type:String},
    src:{type:String},
    title:{type:String},
    content:{type:String},
    price:{type:String},
    count:{type:String}
});

var designdesMode = mongoose.model('designdes',designdesSchema);

//exports.designdes = function(data,callback){
//    designdesMode.create(data, function (err){
//      if(err){
//         callback(err,'失败')
//      }else{
//         callback(data,'成功')
//      }
//   })
//};


exports.designdes = function(data,callback){
    designdesMode.find(data,function(err,doc){
        if(err){
            callback(err,'失败')
        }else{
            callback(doc,'成功')
        }
    })
};