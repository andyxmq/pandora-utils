import { classOf } from "../index";

export function arrayNumber(array){
	if( classOf(array) !== "Array") throw new TypeError("类型错误,只能为Array");
	for(let i = 0,len = array.length; i < len; ++i){
		if(classOf(array[i]) !== "Number"){
			return false;
		}
	}
	return true;
}