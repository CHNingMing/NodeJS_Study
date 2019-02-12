var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'kqktrsb2.2364.dnstoo.com',
    user:'ym970u_f',
    password:'a203358',
    port:'3306',
    database:'ym970u'
});
connection.connect();
var sql = 'SELECT * FROM ym970u.date_item';
connection.query(sql,function(err,data){
    console.log(data[0].date_id);
});

//connection.end();