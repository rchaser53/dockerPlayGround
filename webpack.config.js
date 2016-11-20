const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    './src/index.js'
  ],
  output: {
	  path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.json', '.js', '.jsx', '.ts', '.tsx', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader:  'babel',
        include: path.join(__dirname, 'src')
      },
	{ test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css?modules'
        ]
      }
      ]
  }
};
