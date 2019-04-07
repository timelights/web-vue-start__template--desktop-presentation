# Webpack and Vue from Scratch
Creating a web application using Webpack and Vue from scratch!

## Overview
This is overview of ```dependencies``` and ```devDependencies```
```json
"dependencies": {
    "vue": "^2.6.10",
    "vue-router": "^3.0.2"
},
"devDependencies": {
    "@babel/core": "^7.4.3",
    "@babel/preset-env": "^7.4.3",
    "babel-loader": "^8.0.5",
    "clean-webpack-plugin": "^2.0.1",
    "copy-webpack-plugin": "^5.0.2",
    "css-loader": "^2.1.1",
    "html-webpack-plugin": "^4.0.0-beta.5",
    "mini-css-extract-plugin": "^0.5.0",
    "node-sass": "^4.11.0",
    "optimize-css-assets-webpack-plugin": "^5.0.1",
    "sass-loader": "^7.1.0",
    "vue-loader": "^15.7.0",
    "vue-style-loader": "^4.1.2",
    "vue-template-compiler": "^2.6.10",
    "webpack": "^4.29.6",
    "webpack-cli": "^3.3.0",
    "webpack-dev-server": "^3.2.1"
}
```

```
npm init --yes
```

```
npm install vue vue-router
```

```
npm instal --save-dev webpack webpack-cli vue-loader vue-template-compiler vue-style-loader css-loader html-webpack-plugin clean-webpack-plugin
```
### folder structure
```
root/
├─ public/
    ├─ index.html
├─ src/
    ├─ components/
    ├─ views/
    ├─ App.vue
    ├─ main.js
    └─ router.js
├─ webpack.config.js
└─ webpack.prod.js

```
### webpack.config.js
```js
const path = require("path")
const { VueLoaderPlugin } = require("vue-loader")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")

module.exports = {
    mode: "development", // development|production
    entry: [
        "./src/main.js"
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({ // This will auto-inject the entry files to the index.html
            filename: "index.html",
            template: "public/index.html"
        }),
        new CleanWebpackPlugin()
    ]
}
```
### main.js
```js
import Vue from 'vue'
import App from './App.vue'

new Vue({
    render: h => h(App)
}).$mount('#app')
```
### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>
```
### package.json
```json
"scripts": {
    "build": "webpack"
  },
```
```
npm run build
```
```
npm install --save-dev webpack-dev-server
```
### package.json
```json
"scripts": {
    "build": "webpack --config webpack.prod.js",
    "dev": "webpack-dev-server --hot --history-api-fallback"
},
```

### Add style
```js
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
}
```
### App.vue
```html
<template>
    <div class="full-width center-content">
        <h1>Hello Vue World</h1>
    </div>
</template>

<style scoped>
.full-width {
    width: 100%;
}
.center-content {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

```
### Install Sass
```
npm install --save-dev sass-loader node-sass
```
```js
module.exports = {
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    'vue-style-loader',
                    'css-loader?url=false', // this will help resolve url like "background-image:url()"
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['./node_modules']
                        }
                    }
                ]
            }
        ]
    },
}

```
```html
<style lang="scss" scoped>
```
### Add component
```
components/
├─ HelloComponent.vue
```
```html
<!-- HelloComponent.vue -->
<template>
  <h1>Hello {{ name }}!</h1>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
h1 {
  font-family: "Arial"
}
</style>
```
### Add template, script and style to App.vue
```html
<template>
    <div class="full-width center-content">
        <h1>Hello Vue World</h1>
        <HelloComponent name="Timelights" />
    </div>
</template>

<script>
import HelloComponent from './src/components/HelloComponent.vue'
export default {
  components: {
    HelloComponent
  }
}
</script>

<style lang="scss" scoped>
.center-content {
    flex-direction: column;
}
</style>
```
### Install Babel
```
npm install --save-dev @babel/core @babel/preset-env babel-loader
```
### Then add loader config
```js
{
  test: /\.js$/,
  use: 'babel-loader'
}
```
Add ```.babelrc``` on your root folder
```
{
  "presets": [
    ["@babel/env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }]
  ]
}
```
## Static Assets
Static assets are things like images and video, they will not be processed by Webpack but we will require them to be copied to our dist folder so they will be available to the built application.

To do this we use the copy-webpack-plugin. Following the by-now familiar path we need to install the package:
```
npm install --save-dev copy-webpack-plugin
```
### add these to your config
```js
const CopyWebpackPlugin = require('copy-webpack-plugin')

plugins: [
    new CopyWebpackPlugin([
        {
            from: path.resolve(__dirname, "public"),
            to: path.resolve(__dirname, "dist"),
            toType: 'dir'
        }
    ])
]
```

## Optimize for Production
```
npm install --save-dev mini-css-extract-plugin optimize-css-assets-webpack-plugin
```
### webpack.config.js (complete)
```js
// webpack.config.js
const path = require("path")
const { VueLoaderPlugin } = require("vue-loader")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
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
```
### webpack.prod.js
```js
// webpack.prod.js
const path = require("path")
const { VueLoaderPlugin } = require("vue-loader")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

const TerserWebpackPlugin = require("terser-webpack-plugin")
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: "production",
    entry: {
        // entry.{propertyname} is user-defined
        // feel free to edit or change to any value you like
        // it will be the value for "[name]" in output.filename
        app: "./src/main.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]-[hash].js",
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
```