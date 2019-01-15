const HTMLWebapckPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    "polyfills": [
      "./src/polyfills.js"
    ],
    "main": [
      "./src/index.js"
    ],
  },
  output: {
    path: path.join(process.cwd(), "./dist"),
    publicPath: '/',
    filename: '[name].[hash:20].js'
  },
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/i,
        exclude: /node_modules/,
        loader: 'url-loader',
        options: {
          "name": "[name].[hash:20].[ext]",
          "limit": 10000
        },
      },
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HTMLWebapckPlugin({
      "template": "./index.html",
      "filename": "./index.html",
      "hash": false,
      "inject": true,
      "compile": true,
      "favicon": false,
      "minify": false,
      "cache": true,
      "showErrors": true,
      "chunks": "all",
      "title": "Fly365",
    })
  ],
  devServer: {
    historyApiFallback: true,
    port: 8080,
    host: '0.0.0.0'
  }
};
