
# tutorial1

仅使用了以下几个dependency

* "webpack-cli": "^4.9.2",
* "html-webpack-plugin": "^5.5.0",
* "webpack-dev-server": "^4.9.1"

可以看到此时已经可以同时使用 CommonJS 的 require 和 ES6 的 import 了

不过lib的导出方式也需要对应，否则会出问题

webpack会将这两种操作都进行改写

下一节准备引入babel 看看会做什么额外的事情