var http = require('http');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(req,resp){
    
    var html = "<html><head></head><body><form method='post'><input name='user' /><input name='pws' /><input type='submit' value='提交' /></form></body<</html>";
    var post = '';
    req.on('data',function(trunk){
        console.log(trunk);
        post += trunk;
    });
    req.on('end',function(){
        var queryParam = querystring.parse(post);
        resp.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
        console.log("user:"+queryParam.user);
        console.log("pws:"+queryParam.pws);
        if( queryParam.user == undefined && queryParam.pws == undefined ){
            resp.write(html);
        }else{
            resp.write('user:'+queryParam.user+"\n");
            resp.write('<h1>pws:'+queryParam.pws+"\n</h1>");
        }
        resp.end();
    });

}).listen(8888);

