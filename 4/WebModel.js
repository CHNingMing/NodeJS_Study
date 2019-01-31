//模拟Web
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req,resp){
    var urlPath = url.parse(req.url).pathname;
    urlPath = urlPath.substr(1);
    console.log(urlPath);
    resp.writeHead(200,{'Content-Type':'text/plan;charset=utf-8'});
    fs.readFile(urlPath,function(err,data){
        if( err != null ){
            if( err.errno == -2 ){
                resp.write("没有找到文件:"+urlPath);
            }else{
                resp.write(err.message);
            }
            resp.end();
        }else{
            resp.write(data.toString());
        }
        
        resp.end();
    });
}).listen(8888);

