function formatNumber (n) {
	const str = n.toString();
	return str[1] ? str : `0${str}`;
}

module.exports = formatNumber;