function inherit(p){
	if(p === null) throw TypeError();
	if(Object.create)
		return Object.create(p);
	var t = typeof p;
	if(t !== "object" && t !== "function") throw TypeError();
	var f = function(){};
	f.prototype = p;
	return new f();
} 

module.exports = inherit;