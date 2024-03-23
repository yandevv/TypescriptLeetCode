// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val === undefined ? 0 : val);
//         this.next = (next === undefined ? null : next);
//     }
// }

function changeNext(prevNode: ListNode | null, actualNode: ListNode) {
    let newHead: ListNode;
    if(actualNode && actualNode.next) {
        newHead = changeNext(actualNode, actualNode.next);
    }
    
    if(!newHead) {
        newHead = actualNode;
    }

    actualNode.next = prevNode;
    
    return newHead;
}

function reverseList(head: ListNode | null): ListNode | null {
    if(!head) {
        return null;
    }

    let actualNode: ListNode = head;

    const newHead: ListNode = changeNext(null, actualNode);
    
    return newHead;
}