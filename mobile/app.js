/**
 * Created by Administrator on 2017/5/22/022.
 */
/**
 * Created by Leslie on 2017/5/22.
 */
var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    config = require('./config/config'),
    session = require("express-session"),
    MongoStore = require("connect-mongo")(session);


// 创建Express项目
var app = express();

//mogno session
app.use(session({
    secret:'users',
    name:'users',
    cookie:{maxAge:10800000},
    resave:false,
    saveUninitialized:true,
    store: new MongoStore({
        url:'mongodb://127.0.0.1:27017/first',
        autoRemove:'native'
    })
}));


var users = require('./routers/users');
var article = require('./routers/article');
var zixun = require('./routers/zixun');
var indexser = require('./routers/indexser');
var indexper = require('./routers/indexper');
var indexder = require('./routers/indexder');
var designdes = require('./routers/designdes');
var der = require('./routers/der');
var pro = require('./routers/project');

// 使用中间件处理body参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); // false or true  qs解析

//登录注册接口
app.use('/api/users',users);

//赛事接口
app.use('/api/sai',article);

//资讯
app.use('/api/zixun',zixun);

//index
app.use('/api/index',indexser);
app.use('/api/index',indexper);
app.use('/api/index',indexder);

//des
app.use('/api/design',designdes);
app.use('/api/design',der);

//project
app.use('/api/project',pro);

// 指定静态资源目录, image , css, js
app.use(express.static(path.join(__dirname,'src')));

// 处理404
app.use(function (req, res) {
    res.status(404).json({msg: '404 Not Found'});
});

app.listen(config.port, config.host, function (err) {
    if (err)
        throw err;
    console.log('server status port 3000');
});