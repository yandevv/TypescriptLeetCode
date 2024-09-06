// Definition for singly-linked list.
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val===undefined ? 0 : val);
		this.next = (next===undefined ? null : next);
	}
}

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
	const removedNumbers = new Set(nums);

	while(removedNumbers.has(head!.val)) {
		head = head!.next;
	}

	let lastNode = head;
	let actualNode = head?.next;
	while(actualNode) {
		if(removedNumbers.has(actualNode.val)) {
			lastNode!.next = actualNode.next;
			actualNode = actualNode.next;
			continue;
		}

		lastNode = actualNode;
		actualNode = actualNode.next;
	}

	return head;
};

const case1Head = new ListNode(
	1,
	new ListNode(
		2,
		new ListNode(
			3,
			new ListNode(
				4,
				new ListNode(5)
			)
		)
	)
);
const case1 = modifiedList([1,2,3], case1Head);

const case2Head = new ListNode(
	1,
	new ListNode(
		2,
		new ListNode(
			1,
			new ListNode(
				2,
				new ListNode(
					1,
					new ListNode(2)
				)
			)
		)
	)
);
const case2 = modifiedList([1], case2Head);

const case3Head = new ListNode(
	1,
	new ListNode(
		2,
		new ListNode(
			3,
			new ListNode(4)
		)
	)
);
const case3 = modifiedList([5], case3Head);

console.log(`case1:`);
console.log(case1);
console.log(`case2:`);
console.log(case2);
console.log(`case3:`);
console.log(case3);