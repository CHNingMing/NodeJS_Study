var server = require('./Server');
var route = require('./ModelMapping');
server.start(route.route);

