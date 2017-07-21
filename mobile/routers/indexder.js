/**
 * Created by Administrator on 2017/5/26/026.
 */
/**
 * Created by Administrator on 2017/5/26/026.
 */
var express = require('express');

var router = express.Router();

var indexderMode = require('../models/indexder');

router.post('/indexder',function(req,res){
    var indexder = req.body;
    indexderMode.indexder(indexder,function(data,msg){
        res.status(200).json({status:true,msg:msg,data:data})
    })
});

module.exports = router;