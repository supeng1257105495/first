/**
 * Created by Administrator on 2017/5/22/022.
 */
var mongoose = require('./model');

var articleSchema = new mongoose.Schema({
    type:{type:String},
    src:{type:String},
    title:{type:String},
    num:{type:String},
    num2:{type:String}
});

var articleMode = mongoose.model('article',articleSchema);

exports.saicheng = function(artic,callback){
    articleMode.find(artic,function(err,doc){
        if(err){
            callback(err,'添加失败');
        }else{
            callback(doc,'添加成功');
        }
    })
};