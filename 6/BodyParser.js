//不应BodyParse解析参数
var express = require('express');
var bodyParser = require('body-parser');
var url = require('url');
var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
// 登录页面
app.get('/login',(req,resp)=>{
    resp.sendFile(__dirname+'/login.html');
});
// 登录方法
app.post('/sign_in',bodyParser.urlencoded(),(req,resp)=>{
    console.log(req.body.user);
    resp.end();
});


app.listen(8010,()=>{
    console.log('启动成功！');
});




