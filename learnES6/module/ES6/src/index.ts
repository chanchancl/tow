console.log("Hello ES6");

var div = document.createElement("div");
div.innerHTML = "helloworld";

document.body.appendChild(div);

// 通过 import from 来加载module
// 这段代码最重要在浏览器上执行，所以说
// 写在浏览器上执行的代码，使用 import
// 写在node.js中执行的代码，使用 require
import max from "./tslib/max"

div.setAttribute("style", "color: orange");

let x = 10;
let y = 20;

div = document.createElement("div");
div.innerHTML = `max(${x},${y}) = ` + max(x, y);

document.body.append(div);


// 上面的话貌似也不太对
// 有了 babel，似乎即使在浏览器中，也可以使用 CommonJS module
// 理论上，浏览器默认是不支持 CommonJS module的

// 甚至可能有些浏览器默认也不支持 ES6的module， babel将他们统统转换为ES5标准

const {min} = require("./lib/min");


div = document.createElement("div");
div.innerHTML = `min(${x},${y}) = ` + min(x, y);

document.body.append(div);


/*

    总结：
    1.babel可以将 CommonJS ES6 的module 转换为大部分浏览器都支持的的ES5代码
    2.webpack将babel转换后的代码打包

    module ----(babel)--->  ES5 -----(webpack)---->  package
*/

import tsmax  from "./tslib/max";

div = document.createElement("div");
div.innerHTML = `tsmax(${x},${y}) = ` + tsmax(x, y);

document.body.append(div);