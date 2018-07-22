var path = require("path");
const webpack = require('webpack');
// 缓存插件名称，以便简化后面的配置
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
	"entry": {
		"pandora-utils": "./src/index.js"
	},
	"output": {
		path: path.resolve(__dirname, "release"),
		filename: "[name].min.js",
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
		}),
		new UglifyJsPlugin()
	]
};