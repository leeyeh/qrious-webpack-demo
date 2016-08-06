const path = require('path')

module.exports = {
  entry: './src/index.js',

  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        include: path.resolve('./src'),
        exclude: /node_modules/,
      },
    ],
  },

  output: {
    path: './dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
}
