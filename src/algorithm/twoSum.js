/**
 * @param { number[] } nums
 * @param { number } target
 * @return { number[] }
 * 
 * @example 
 * Given nums = [2, 7, 11, 15], target = 9
 * Because nums[0] + nums[1] = 2 + 7 = 9
 * return [0,1]
 */

export function twoSum(nums, target){
	var hash = {};
	for(let i = 0; i < nums.length; ++i){
		if( hash[target - nums[i]] !== undefined) {
			return  [hash[target - nums[i]], i];
		}
		hash[nums[i]] = i;
	}
}