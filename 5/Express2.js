var express = require('express');
var app = express();
app.get('/',(req,resp)=>{
    var json = {name:'张三',age:18};
    resp.set('Content-Type','text/plain;charset=utf-8');
    resp.end(JSON.stringify(json));
});

var server = app.listen(8010,function(){
    console.log('开启成功！，端口：%d，地址：%s',server.address().port,server.address().address);
});


