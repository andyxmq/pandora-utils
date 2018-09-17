const formatNumber = require("./formatNumber");

function formatSeconds (value) {
	var secondTime = parseInt(value);
	var minuteTime = 0;
	var hourTime = 0;
	if (secondTime > 60) {
		minuteTime = parseInt(secondTime / 60);
		secondTime = parseInt(secondTime % 60);
		if (minuteTime > 60) {
			hourTime = parseInt(minuteTime / 60);
			minuteTime = parseInt(minuteTime % 60);
		}
	}
	var result = formatNumber(parseInt(secondTime));
	if (minuteTime > 0) {
		result = "" + formatNumber(parseInt(minuteTime)) + ":" + result;
	}
	if (hourTime > 0) {
		result = "" + formatNumber(parseInt(hourTime)) + ":" + result;
	}
	return result;
}

module.exports = formatSeconds;