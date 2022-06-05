const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    // 引入 typescript ， 将 entry 修改一下，否则默认是  ./src/index.js
    entry: path.resolve(__dirname, "src", "index.ts"),
    module: {
        rules: [
            // {
            //     test: /\.css$/i,
            //     use: ["style-loader", "css-loader"],
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.tsx?$/,
                use: [
                    "ts-loader"
                ],
                exclude: /node-modules/,
            }
        ],
    },
    // 通过 resolve，使得可以require .ts 后缀的文件
    resolve: {
        extensions: ['.js','.ts', '...']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
}