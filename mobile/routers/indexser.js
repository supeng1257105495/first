/**
 * Created by Administrator on 2017/5/26/026.
 */
var express = require('express');

var router = express.Router();

var indexserMode = require('../models/indexser');

router.post('/indexser',function(req,res){
    var indexser = req.body;
    indexserMode.indexser(indexser,function(data,msg){
        res.status(200).json({status:true,msg:msg,data:data})
    })
});

module.exports = router;