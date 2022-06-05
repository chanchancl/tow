console.log("Hello ES6");

var div = document.createElement("div");
div.innerHTML = "helloworld";
div.setAttribute("style", "color: orange");

document.body.appendChild(div);

// 通过 import from 来加载module
// 这段代码最重要在浏览器上执行，所以说
// 写在浏览器上执行的代码，使用 import
// 写在node.js中执行的代码，使用 require


// CommonJS : require   module.exports
// ES6      : import    export

// 如果是在原生的 node 中，只能使用  CommonJS
// 如果是在原生的 浏览器中，只能使用  ES5！！！（除非你的浏览器足够新，可以支持ES6）

import max from "./lib/max"
const {min} = require("./lib/min");


let x = 10;
let y = 20;

div = document.createElement("div");
div.innerHTML = `max(${x},${y}) = ` + max(x, y);
document.body.append(div);

div = document.createElement("div");
div.innerHTML = `min(${x},${y}) = ` + min(x, y);
document.body.append(div);
/*

    总结：
    1.babel可以将 CommonJS ES6 的module 转换为大部分浏览器都支持的的ES5代码
    2.webpack将babel转换后的代码打包

    module ----(babel)--->  ES5 -----(webpack)---->  package
*/
