//简单webpack JS文件
var path = require('path');
module.exports = {
    entry: './app/index.js',
    output:{
        path: path.resolve(__dirname,'output'),
        filename: 'output-file.js'
    }
};

