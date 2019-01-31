//服务端
var url = require('url');
var http = require('http');
var util = require('util');

http.createServer(function(req,resp){
    resp.writeHead(200,{'Content-Type':'text/plain'});
    //console.log(req.url);
    var params = url.parse(req.url,true).query;
    console.log(url.parse(req.url).pathname);
    
    resp.write("URL:"+params.param1);
    resp.write("URL:"+params.param2);
    resp.end();
}).listen(8888);




