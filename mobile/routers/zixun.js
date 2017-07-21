
/**
 * Created by Administrator on 2017/5/22/022.
 */
var express = require('express');

var router = express.Router();

var zixunMode = require('../models/zixun');

router.post('/list',function(req,res){
    var zixun = req.body;
    zixunMode.zixun(zixun,function(data,msg){
        res.status(200).json({status:true,msg:msg,data:data});
    })
});

module.exports = router;