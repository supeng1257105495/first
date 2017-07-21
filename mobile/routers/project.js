
/**
 * Created by Administrator on 2017/5/22/022.
 */
var express = require('express');

var router = express.Router();

var proMode = require('../models/project');

router.post('/pro',function(req,res){
    var pro = req.body;
    proMode.pro(pro,function(data,msg){
        res.status(200).json({status:true,msg:msg,data:data});
    })
});

module.exports = router;