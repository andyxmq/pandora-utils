/**
 * prehandle `method url`.
 *
 * @param {String} url main url.
 * @param {Object} params be made up a lots of query param
 * @returns {String} Returns url with query param,
 * @example
 *
 */
function parseUrl (url, params) {
	const str = Object.keys(params).reduce((result, key) => {
		result += `${key}=${params[key]}&`;
		return result;
	}, "");
	return `${url}?${str.substr(0, str.length - 1)}`;
}

module.exports = parseUrl;
