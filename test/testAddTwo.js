import { addTwoNumbers, ListNode } from "../src/index";

function generateList(nums){
	let root = null;
	for(let i = 0; i < nums.length; ++i){
		let tempListNode = new ListNode(nums[i]);
		if(!root){
			root = tempListNode;
		}else{
			root.next = tempListNode;
		}
	}
	return root;
}