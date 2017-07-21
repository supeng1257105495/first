/**
 * Created by Administrator on 2017/5/22/022.
 */

var mongoose = require('mongoose');
var config = require('../config/config.js');
//链接数据库
mongoose.connect("mongodb://"+config.dbhost+"/"+config.dbname,function(err){
    if(err)
        throw err;
    console.log('链接数据库成功')
});

module.exports = mongoose;