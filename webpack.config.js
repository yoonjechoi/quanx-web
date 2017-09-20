const path = require('path')

module.exports = {
  entry: {
    main: './src/app/entry.js',
  },

  output: {
    filename: 'dist/bundle.js',
  },

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
              presets: [[
                'env', {
                  targets: {
                    browsers: [
                      'last 2 versions',
                    ],
                  },
                },
              ]],

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

}
