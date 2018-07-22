var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	"entry": {
		preload: "./src/example.js",
	},
	"output": {
		path: path.resolve(__dirname, "example"),
		filename: "[name].js",
	},
	"module": {
		rules: [{
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: 'index.html',
			filename: 'preload.html'
        })
	]
};