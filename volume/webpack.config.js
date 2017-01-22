const path = require('path');
const webpack = require('webpack');
module.exports = {
  devtool: 'inline-source-map',
  entry: [
	'babel-polyfill',
    './src/index.tsx'
  ],
  output: {
    path: path.join(__dirname, '/'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
	new webpack.LoaderOptionsPlugin({
		options: {
			tslint: {
				emitErrors: false,
				failOnHint: false,
				resourcePath: 'src'
			}
		}
	})
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.ts', '.tsx', '.css']
  },
  module: {
    rules: [
      {
		enforce: 'pre',
        test: /\.(ts|tsx)$/,
        loader: 'tslint-loader',
		exclude: /(node_modules)/
      },      
      {
        test: /\.(ts|tsx)$/,
        loaders: ['babel-loader', 'ts-loader'],
        include: path.join(__dirname, 'src')
      },
			{ test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules'
        ]
      }
      ]
  }
};
