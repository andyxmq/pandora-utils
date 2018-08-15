"use strict";
const classOf = require("./classOf");
function arrayNumber(array){
	if( classOf(array) !== "Array") throw new TypeError("类型错误,传入参数只能数组类型");
	for(let i = 0,len = array.length; i < len; ++i){
		if(classOf(array[i]) !== "Number"){
			return false;
		}
	}
	return true;
}

module.exports = arrayNumber;