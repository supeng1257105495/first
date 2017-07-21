/**
 * Created by Administrator on 2017/5/26/026.
 */
var express = require('express');

var router = express.Router();

var designdesMode = require('../models/designdes');

router.post('/des',function(req,res){
    var designdes = req.body;
    designdesMode.designdes(designdes,function(data,msg){
        res.status(200).json({status:true,msg:msg,data:data})
    })
});

module.exports = router;