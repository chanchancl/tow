const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    // entry: path.resolve(__dirname, "src", "index.js"),

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
}