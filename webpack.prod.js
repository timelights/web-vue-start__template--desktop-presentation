const path = require("path")
const { VueLoaderPlugin } = require("vue-loader")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

const TerserWebpackPlugin = require("terser-webpack-plugin")
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            Assets: path.resolve(__dirname, "src/assets"),
        }
    },
    mode: "production",
    entry: {
        // entry.{propertyname} is user-defined
        // feel free to edit or change to any value you like
        // it will be the value for "[name]" in output.filename
        app: "./src/main.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name]-[hash].js",
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin({
                terserOptions: {
                    output: {
                    comments: false
                    }
                }
            })
        ]
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
                    MiniCssExtractPlugin.loader,
                    // 'vue-style-loader',
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
                        name: '[hash].[ext]',
                        outputPath: 'imgs'
                    }
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
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
        new MiniCssExtractPlugin({
            filename: "[name]-[hash].css"
        })
    ]
}