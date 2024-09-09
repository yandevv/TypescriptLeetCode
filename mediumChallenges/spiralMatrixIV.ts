// Definition for singly-linked list.
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val);
		this.next = (next === undefined ? null : next);
	}
}

// First Approach - Iterating linked list, tracking actual pos of matrix and the direction, placing the numbers according the direction and position. (440ms - Beats 66.67%)
function spiralMatrix(m: number, n: number, head: ListNode | null): number[][] {
	const ans = new Array(m);
	for(let i = 0; i < m; i++) {
		ans[i] = new Array(n).fill(-1);
	}

	// 0: east
	// 1: south
	// 2: west
	// 3: north
	let direction: 0 | 1 | 2 | 3 = 0;

	let actualPos: [number, number] = [0, 0]

	let node = head;
	while(node) {
		if(direction === 0) {
			ans[actualPos[0]][actualPos[1]] = node.val;

			if(!ans[actualPos[0]][actualPos[1] + 1] || ans[actualPos[0]][actualPos[1] + 1] !== -1) {
				direction = 1
				actualPos[0]++;
			} else {
				actualPos[1]++;
			};
		} else if(direction === 1) {
			ans[actualPos[0]][actualPos[1]] = node.val;

			if(ans[actualPos[0] + 1]) {
				if(!ans[actualPos[0] + 1][actualPos[1]] || ans[actualPos[0] + 1][actualPos[1]] !== -1) {
					direction = 2
					actualPos[1]--;
				} else {
					actualPos[0]++;
				};
			} else {
				direction = 2
				actualPos[1]--;
			};
		} else if(direction === 2) {
			ans[actualPos[0]][actualPos[1]] = node.val;

			if(!ans[actualPos[0]][actualPos[1] - 1] || ans[actualPos[0]][actualPos[1] - 1] !== -1) {
				direction = 3
				actualPos[0]--;
			} else {
				actualPos[1]--;
			};
		} else if(direction === 3) {
			ans[actualPos[0]][actualPos[1]] = node.val;

			if(!ans[actualPos[0] - 1][actualPos[1]] || ans[actualPos[0] - 1][actualPos[1]] !== -1) {
				direction = 0
				actualPos[1]++;
			} else {
				actualPos[0]--;
			};
		}

		node = node.next;
	}

	return ans;
};

const case1Head = new ListNode(
	3,
	new ListNode(
		0,
		new ListNode(
			2,
			new ListNode(
				6,
				new ListNode(
					8,
					new ListNode(
						1,
						new ListNode(
							7,
							new ListNode(
								9,
								new ListNode(
									4,
									new ListNode(
										2,
										new ListNode(
											5,
											new ListNode(
												5,
												new ListNode(0)
											)
										)
									)
								)
							)
						)
					)
				)
			)
		)
	)
)
const case1 = spiralMatrix(3, 5, case1Head);

const case2Head = new ListNode(
	0,
	new ListNode(
		1,
		new ListNode(2)
	)
);
const case2 = spiralMatrix(1, 4, case2Head);

console.log("case1:");
console.log(case1);

console.log("case2:");
console.log(case2);