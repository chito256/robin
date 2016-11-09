const webpack = require('webpack');
const path = require('path');

module.exports = {
  // entry: './js/index.js',
  output: {
    filename: 'bundle.js'
  },
  // watch: true,
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  }
}
