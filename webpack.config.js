var path = require("path");
const excludeModules = /node_modules/;
module.exports = {
	"entry": "./src/index.js",
	"output": {
		path: path.resolve(__dirname, "release"),
		filename: "[name].[hash-chunk].js",
	},
	"module": {
		rules: [{
			test: /\.js?$/,
			exclude: excludeModules,
			loader: "babel-loader"
		}]
	}
};