
/**
 * Created by Administrator on 2017/5/26/026.
 */
var express = require('express');

var router = express.Router();

var derMode = require('../models/der');

router.post('/der',function(req,res){
    var der = req.body;
    derMode.der(der,function(data,msg){
        res.status(200).json({status:true,msg:msg,data:data})
    })
});

module.exports = router;