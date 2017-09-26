const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'source-map',

  devServer: {
    contentBase: './dist',
    hot: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
