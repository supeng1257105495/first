/**
 * Created by Administrator on 2017/5/26/026.
 */

var mongoose = require('./model');

var indexserSchema = new mongoose.Schema({
   type:{type:String},
   servicesrc:{type:String},
   serviceClassify:{type:String},
   prive:{type:String},
   p1:{type:String},
   servicedisigner:{type:String}
});

var indexserMode = mongoose.model('indexser',indexserSchema);

//exports.indexser = function(data,callback){
//   indexserMode.create(data, function (err){
//      if(err){
//         callback(err,'失败')
//      }else{
//         callback(data,'成功')
//      }
//   })
//};


exports.indexser = function(data,callback){
   indexserMode.find(data,function(err,doc){
      if(err){
         callback(err,'失败')
      }else{
         callback(doc,'成功')
      }
   })
};