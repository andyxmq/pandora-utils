function allUnique(s, start, end){
	const set = new Set();
	for(let i = start; i < end; ++i){
		let ch = s[i];
		if(set.has(ch)) return false;
		set.add(ch);
	}
	return true;
}

/**
 * @param {string}
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
	let len = s.length;
	let ans = 0;
	for(let i = 0;i < len-1; ++i)
		for(let j= i+1; j <= len; ++j)
			if(allUnique(s,i,j)) ans = Math.max(ans,j-i);
	return ans;
}

function lengthOfLongestSubstring1(str){
	let len = str.length;
	let ans = 0, i = 0, j = 0;
	let set = new Set();
	while(i < len && j < len){
		if(!set.has(str[j])){
			set.add(str[j++]);
			ans = Math.max(ans,j-i);
		}else{
			set.delete(str[i++]);
		}
	}
	return ans;
}

console.log(lengthOfLongestSubstring1("abcabcdef"));
module.exports = lengthOfLongestSubstring;

