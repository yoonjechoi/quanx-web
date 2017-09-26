const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

console.log(path.resolve(__dirname, 'dist'));

module.exports = {
  entry: {
    main: './src/entry.jsx',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },

  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Webpack2 playground',
      template: './src/index.html',
    }),
  ],

  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      utilities: path.resolve(__dirname, 'src/utilities/'),
    },
    extensions: ['.js', '.css'],
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react'],
              plugins: [
                'react-hot-loader/babel',
                ['transform-class-properties', { spec: true }],
              ],
            },
          },

        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },

};
