/**
 * Created by Administrator on 2017/5/22/022.
 */
var express = require('express');

var router = express.Router();

var articleMode = require('../models/article');

router.post('/saicheng',function(req,res){
    var artic = req.body;
        articleMode.saicheng(artic,function(data,msg){
            res.status(200).json({status: true, msg: msg, data: data});
        })
});
module.exports = router;