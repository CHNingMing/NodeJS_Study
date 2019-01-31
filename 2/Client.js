//Web客户端
var http = require('http');
var options = {
    host : 'www.baidu.com',
    port : '80',
};
var req = http.request(options,function(response){
    var body = '';
    response.on('data',function(data){
        body += data;
    });
    response.on('end',function(){
        console.log('接受完成：' + body);
    });
});
req.end();


