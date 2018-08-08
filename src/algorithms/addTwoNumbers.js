const classOf = require("../common/classOf");
const arrayNumber = require("../common/arrayNumber");

function generateList(nums){
	if(classOf(nums) !== "Array" || !arrayNumber(nums)) throw new TypeError("nums必须为Number的Array类型");
	let root = null,curr = null;
	for(let i = 0,len = nums.length; i < len; ++i ){
		let tempListNode = new ListNode(nums[i]);
		if(!root){
			root = 	curr = tempListNode;
		}else{
			curr = curr.next = tempListNode;
		}
	}	
	return root;
}


function ListNode(val){
	this.val = val;
	this.next = null;
}
/**
 * @param {Array[Number]} arr1
 * @param {Array[Number]} arr2
 * @return { ListNode }
 */
function addTwoNumbers(arr1, arr2){
	var l1 = generateList(arr1);
	var l2 = generateList(arr2);
	var curr;
	var curry = 0, dummy = curr = new ListNode(0);
	while(l1 || l2 || curry){
		if(l1){
			curry += l1.val; l1 =l1.next;
		}   
		if(l2){
			curry += l2.val; l2=l2.next;
		}
		curr = curr.next = new ListNode(curry%10);
		curry = curry>9?1:0;
	}
	return dummy.next;
}
module.exports = addTwoNumbers;