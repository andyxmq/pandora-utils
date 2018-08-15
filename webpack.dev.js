var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	"entry": {
		main: "./src/test.js",
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
			template: "index.html"
		})
	]
};