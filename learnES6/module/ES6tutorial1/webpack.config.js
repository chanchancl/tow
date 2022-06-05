const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    // 默认入口 ./src/index.js，可以注释掉
    // entry: path.resolve(__dirname, "src", "index.js"),
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
}