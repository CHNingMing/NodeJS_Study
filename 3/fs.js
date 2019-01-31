var fs = require('fs');
fs.stat('/Users/ming/Desktop/Develop/NodeWork/3/fs.js',(err,state)=>{
    console.log(state.isDirectory());
});


