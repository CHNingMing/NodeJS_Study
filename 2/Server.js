//服务端
var http = require('http');
var url = require('url');
function server(route){
    //每个请求访问方法
    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        route(pathname);
        response.writeHead(200,{'Context-Type':'text/plain'});
        response.write('<h1>Hello '+pathname+'!</h1>');
        response.end();
    }
    http.createServer(onRequest).listen(8888);
}
exports.start = server;
