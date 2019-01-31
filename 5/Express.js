//Express框架
var express = require('express');
var app = express();
app.use(express.static('images'));
app.get('/',function(req,resp){
    resp.send('Hello Express!');
});
app.post('/',function(req,resp){
    resp.send('post请求');
});
app.get('/delete_*',(req,resp)=>{
    resp.send('删除页请求');
});
app.post('/delete',(req,resp)=>{
    resp.send('POST删除页请求');
});
var server = app.listen(8010,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址：%s%s",host,port);
});

