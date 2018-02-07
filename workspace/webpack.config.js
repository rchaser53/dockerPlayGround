const path = require('path');

module.exports = {
	entry: './src/index.ts',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.ts', '.vue', '.js', '.css'],
		alias: {
			vue$: 'vue/dist/vue.esm.js'
		}
	},
	module: {
		rules: [
      {
        enforce: 'pre',
        test: /\.ts$/,
        loader: 'tslint-loader',
        exclude: /(node_modules)/,
        options: {
            configFile: 'tslint.json'
        }
    },
    {
        test: /\.ts$/,
        exclude: /node_modules|vue\/src/,
        loader: 'ts-loader',
        options: {
            appendTsSuffixTo: [/\.vue$/],
            transpileOnly: true
        }
    },
    {
        test: /\.vue$/,
        loader: 'vue-loader'
    }
		]
	},
	devServer: {
		port: 3000,
		host: "localhost",
	},
	devtool: 'inline-source-map'
};