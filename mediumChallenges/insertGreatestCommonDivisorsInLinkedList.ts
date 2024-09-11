// Definition for singly-linked list.
class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val===undefined ? 0 : val)
		this.next = (next===undefined ? null : next)
	}
}

// First Approach - In place adding new nodes between old nodes with the value of GCD of both nodes. (102ms - Beats 47.14%)
function calculateGCD(number1: number, number2: number) {
	let gcd = 1;
	let lowestNumber = Math.min(number1, number2);
	for(let i = 2; i <= lowestNumber / 2; i++) {
		if(number1 % i === 0 && number2 % i === 0)
			gcd = i;
	}
	if(number1 % lowestNumber === 0 && number2 % lowestNumber === 0)
		gcd = lowestNumber;

	return gcd;
}

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
	let prev = head!;
	let node = head?.next;
	while(node) {
		prev.next = new ListNode(calculateGCD(prev.val, node.val), node);
		prev = node;
		node = node.next;
	}
	return head;
};

const case1Head = new ListNode(
	18,
	new ListNode(
		6,
		new ListNode(
			10,
			new ListNode(3)
		)
	)
);
const case1 = insertGreatestCommonDivisors(case1Head);

const case2Head = new ListNode(7);
const case2 = insertGreatestCommonDivisors(case2Head);

console.log("case1:");
console.log(case1);

console.log("case2:");
console.log(case2);