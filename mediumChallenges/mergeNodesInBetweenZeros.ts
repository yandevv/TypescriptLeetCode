// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// First Approach - O(n) solution creating a new answer list node head and iterating over the param head getting the sums
function mergeNodes(head: ListNode | null): ListNode | null {
    if(!head) return head;
    let lastReference: ListNode | null = null, answerHead: ListNode | null = null;
    head = head.next;
    let actualSum: number = 0;
    while(head) {
        if(head.val !== 0) {
            actualSum += head.val;
        } else {
            if(!lastReference) {
                lastReference = new ListNode(actualSum);
                answerHead = lastReference;
            } else {
                lastReference.next = new ListNode(actualSum);
                lastReference = lastReference.next;
            }
            actualSum = 0;
        }
        head = head.next;
    }
    return answerHead;
};