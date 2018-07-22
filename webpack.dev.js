var path = require("path");
module.exports = {
	"entry": "./src/index.js",
	"output": {
		path: path.resolve(__dirname, "release"),
		filename: "[name].js",
	},
	"module": {
		rules: [{
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}]
	}
};