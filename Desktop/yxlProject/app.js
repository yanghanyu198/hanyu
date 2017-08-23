var express = require('express');
var bodyParser = require('body-parser')
var serveStatic = require('serve-static')
var rf = require('fs')
var port = process.env.PORT || 3000;
var app = express();
// app.set('views', './view/pages');
// app.set('view engine', 'jade');

//新的下载地址
// app.locals.moment = require('moment');
// // mongoose.connect('mongodb://localhost:27017/imooc'); // 连接mongodb本地数据库imovie
// console.log('MongoDB connection success!');
// app.use(serveStatic('bower_components'));
// app.use(serveStatic('public'));
app.use(bodyParser.urlencoded({ extended: false }))
// 监听3000端口
app.listen(port);


// app.use('/',require('./route/lister'));

app.get('/indexs', function (req, res) {
    //
    //在终端 进入项目目录 输入 node app.js 就会启动项目

    //在浏览器输入 localhost:3000/indexs
    //同步解析 index.html
    var bytesRead=rf.readFileSync("index.html","utf-8");


    console.log(bytesRead);
    // console.log('123440000');


});



exports.app = app;

