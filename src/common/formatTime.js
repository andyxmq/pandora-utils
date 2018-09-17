const existy = require("./existy");
const classOf = require("./classOf");
const formatNumber = require("./formatNumber");
function formatTime (date, divider) {
	if (!existy(date)) return;
	if (!divider) {
		divider = ".";
	}
	if (classOf(date) === "String") date = new Date(date); 
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();

	const hour = date.getHours();
	const minute = date.getMinutes();
	const second = date.getSeconds();

	const t1 = [year, month, day].map(formatNumber).join(divider);
	const t2 = [hour, minute, second].map(formatNumber).join(":");

	return `${t1} ${t2}`;
}

module.exports = formatTime;