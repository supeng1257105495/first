/**
 * Created by Administrator on 2017/5/22/022.
 */
var express = require('express');

//创建路由 担当了controller
var router = express.Router();

//引入骨架模型
var usersMode = require('../models/users');

//注册
router.post('/register',function(req,res) {
    var users = req.body;

    //导入的方法
    usersMode.register(users, function (data, msg){
        res.status(200).json({status: true, msg: msg, data: data});
    });
});
//验证用户名
router.post('/username',function(req,res){
    var username = req.body;
    usersMode.username(username,function(data,msg){
        if(data == null){
            var data=1;
            res.status(200).json({status:true,msg:msg,data:data})
        }else{
            res.status(200).json({status:true,msg:msg,data:data})
        }
    })
});

//验证邮箱
router.post('/email',function(req,res){
    var email = req.body;
    usersMode.email(email,function(data,msg){
        if(data == null){
            var data = 2;
            res.status(200).json({status:true,msg:msg,data:data})
        }else{
            res.status(200).json({status:true,msg:msg,data:data})
        }
    })
});
//登录验证
router.post('/login',function(req,res){
    var login = req.body;
    usersMode.login(login,function(data,msg){
        if(data == null){
            var data = 3;
            res.status(200).json({status:true,msg:msg,data:data})
        }else{
            req.session.user = data;
            res.status(200).json({status:true,msg:msg,data:data})
        }
    })
});

//取出session
router.get('/session',function(req,res){
   if(req.session.user == undefined){
       res.status(200).json({status: false, msg: '请去登录'});
   }else{
       res.status(200).json({status: true, msg: '登录验证成功', data: req.session.user});
   }
});
module.exports = router;