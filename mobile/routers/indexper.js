/**
 * Created by Administrator on 2017/5/26/026.
 */

var express = require('express');

var router = express.Router();

var indexperMode = require('../models/indexper');

router.post('/indexper',function(req,res){
    var indexper = req.body;
    indexperMode.indexper(indexper,function(data,msg){
        res.status(200).json({status:true,msg:msg,data:data})
    })
});

module.exports = router;