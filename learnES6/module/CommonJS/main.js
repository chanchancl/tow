

// CommonJS 由 Node.js 专用
// 使用 require() 和 module.exports

let {stat, exists, readfile, fstat} = require('fs');


stat("D:\\", (err, stats) => {
    console.log(stats.isDirectory());
    console.log(stats);
})