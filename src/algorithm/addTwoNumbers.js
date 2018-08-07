import { classOf,arrayNumber } from "../index";

export function generateList(nums){
	if(classOf(nums) !== "Number" || classOf(nums) !== "Array") throw new TypeError("只支持Number类型，Array类型");
	if(!arrayNumber(nums)) throw new TypeError("nums中元素必须为Number类型");
	let root = null;
	for(let i = 0,len = nums.length; i < len; ++i ){
		let tempListNode = new ListNode(nums[i]);
		if(!root){
			root = tempListNode;
		}else{
			root.next = tempListNode;
		}
	}	
	return root;
}

export function ListNode(val){
	this.val = val;
	this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export function addTwoNumbers(l1, l2){
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