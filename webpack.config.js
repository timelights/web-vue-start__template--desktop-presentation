const path = require("path")
const { VueLoaderPlugin } = require("vue-loader")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            Assets: path.resolve(__dirname, "src/assets")
        }
    },
    mode: "development",
    entry: {
        app: "./src/main.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'vue-style-loader',
                    'css-loader?url=false',
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['./node_modules']
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(jpg|png|webp)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({ // This will auto-inject the entry files to the index.html
            filename: "index.html",
            template: "public/index.html"
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, "public"),
                to: path.resolve(__dirname, "dist"),
                toType: "dir",
                ignore: ["index.html"]
            }
        ]),
    ]
}