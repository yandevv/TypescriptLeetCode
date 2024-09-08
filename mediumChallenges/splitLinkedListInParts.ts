// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val);
      this.next = (next === undefined ? null : next);
  }
}

// First Approach - Defining length of linked list and iterating it by the length, tracking by the head and cutting of when needed. (https://leetcode.com/problems/split-linked-list-in-parts/solutions/5752989/beats-100-explained-with-video-c-java-python-o-n-time-o-k-space-explained-in-detail/?envType=daily-question&envId=2024-09-08)
function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
let length = 0;
let node = head;
while(node) {
  length++;
  node = node.next;
}

let splitLength = Math.floor(length / k);

let remainingParts = length % k;

node = head;
let prev = node;

const res: Array<ListNode | null> = new Array(k);
for(let i = 0; i < k; i++) {
  let newPart = node;

  let currentLength = splitLength
  if(remainingParts > 0) {
    remainingParts--;
    currentLength++;
  }

  let j = 0;
  while(j < currentLength) {
    prev = node;
    node = node!.next;
    j++;
  }

  if(prev){
    prev.next = null;
  }

  res[i] = newPart;
}

return res;
};

const case1LinkedList = new ListNode(
1,
new ListNode(
  2,
  new ListNode(3)
)
);
const case1 = splitListToParts(case1LinkedList, 5);

const case2LinkedList = new ListNode(
1,
new ListNode(
  2,
  new ListNode(
    3,
    new ListNode(
      4,
      new ListNode(
        5,
        new ListNode(
          6,
          new ListNode(
            7,
            new ListNode(
              8,
              new ListNode(
                9,
                new ListNode(10)
              )
            )
          )
        )
      )
    )
  )
)
)
const case2 = splitListToParts(case2LinkedList, 3);