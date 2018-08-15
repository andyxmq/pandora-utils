/**
 * prehandle `method url`.
 *
 * @param {String} url main url.
 * @param {Object} params be made up a lots of query param
 * @returns {String} Returns url with query param,
 * @example
 *
 */
function generateTargetUrl (url, params) {
	let pathParam = "";
	for (var key in params) {
		if (params[key]) {
			pathParam += `${key}=${encodeURIComponent(params[key])}&`;
		}
	}
	pathParam = pathParam.substring(0, pathParam.length - 1);
	return `${url}?${pathParam}`;
}

module.exports = generateTargetUrl;