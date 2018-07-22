var path = require("path");
const webpack = require('webpack');
module.exports = {
	"entry": "./src/index.js",
	"output": {
		path: path.resolve(__dirname, "release"),
		filename: "pandora-utils.min.js",
	},
	"module": {
		rules: [{
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}]
	},
	"plugins":[
		new webpack.BannerPlugin({
			banner: 'hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]',
			raw: false
		})
	]
};