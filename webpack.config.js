const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'src/client.jsx'),
  output: {
    filename: 'client.js',
    publicPath: '/assets/',
    path: path.join(__dirname, 'tmp')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'Promise': 'exports?global.Promise!es6-promise',
      'fetch': 'exports?self.fetch!whatwg-fetch'
    })
  ],
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, 'tmp/')
  }
};
