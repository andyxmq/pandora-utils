export function classOf(o){
	if(o===null) return "Null";
	if(o===undefined) return "Undefined";
	return Object.prototype.toString.call(o).slice(8,-1);
}

export function inherit(p){
	if(p === null) throw TypeError();
	if(Object.create)
		return Object.create(p);
	var t = typeof p;
	if(t !== "object" && t !== "function") throw TypeError();
	var f = function(){};
	f.prototype = p;
	return new f();
} 

/**
 * 
 * @param {*} x 表示两个值不存在
 */
export function existy(x){
	return x != null;
}