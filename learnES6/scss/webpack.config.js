const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MineCssExtracePlugin = require("mini-css-extract-plugin")

module.exports = {
    // 默认入口 ./src/index.js，可以注释掉
    // entry: path.resolve(__dirname, "src", "index.js"),
    plugins: [
        new MineCssExtracePlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                exclude: /(node_modules|bower_components)/,
                use: [
                    MineCssExtracePlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            }
        ]
    },
}