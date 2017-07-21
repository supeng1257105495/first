/**
 * Created by Administrator on 2017/5/22/022.
 */

var mongoose = require('./model');

var usersSchema = new mongoose.Schema({
    username:{type:String},
    password:{type:String},
    email:{type:String},
    last_login_time: {type: Date, default: new Date()}
});

//创建表格
var usersMode = mongoose.model('user', usersSchema);

//写入方法
exports.register = function(users,callback){
    //查找数据
    usersMode.findOne(users, function (err, doc) {
        // 3. 返回信息
        if (err)
            throw err;
        if (doc==null) {
            //加入数据
            usersMode.create(users,function(err){
                if(err){
                    callback(err,'注册失败')
                }else{
                    callback(users,'注册成功')
                }
            })
        } else {
            callback(doc,'用户名已存在');
        }
    })
};
//验证用户名
exports.username = function(username,callback){
        usersMode.findOne(username,function(err,doc){
            if(err){
                callback(err,'查找失败');
            }else{
                callback(doc,'查找成功');
            }
        })
};
//验证email
exports.email = function(email,callback){
    usersMode.findOne(email,function(err,doc){
        if(err){
            callback(err,'验证失败')
        }else{
            callback(doc,'验证成功')
        }
    })
};
//登录
exports.login = function(login,callback){
    usersMode.findOne(login,function(err,doc){
        if(err){
            callback(err,'验证失败')
        }else{
            callback(doc,'验证成功');

        }
    })
};