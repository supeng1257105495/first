/**
 * Created by Administrator on 2017/5/26/026.
 */
/**
 * Created by Administrator on 2017/5/26/026.
 */


var mongoose = require('./model');

var derSchema = new mongoose.Schema({
    type:{type:String},
    src:{type:String}
});

var derMode = mongoose.model('der',derSchema);

//exports.der = function(data,callback){
//    derMode.create(data, function (err){
//      if(err){
//         callback(err,'失败')
//      }else{
//         callback(data,'成功')
//      }
//   })
//};


exports.der = function(data,callback){
    derMode.find(data,function(err,doc){
        if(err){
            callback(err,'失败')
        }else{
            callback(doc,'成功')
        }
    })
};