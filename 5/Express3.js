var express = require('express');
var url = require('url');
var app = express();
app.get('/login',(req,resp)=>{
    console.log('请求路径：%s',req.url);
    console.log(__dirname);
    resp.sendFile(__dirname+'/'+'login.html');
});
app.get('/user',(req,resp)=>{
    console.log(req.url);
    var param = url.parse(req.url,true).query;
    console.log("user:%s,Password:%s",param.user,param.password);
    resp.write('user:'+param.user+'<br />password:'+param.password);
    resp.end();
});
var server = app.listen(8010,(req,resp)=>{
    console.log("启动成功！，%s%d",server.address().address,server.address().port);
});
