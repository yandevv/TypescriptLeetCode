// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }

function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
    let posLastRemovedNode: ListNode = list1;

    for(let i = 0; i <= b; i++) {
        posLastRemovedNode = posLastRemovedNode.next;
    }

    let list2Node: ListNode = list2;
    while(list2Node.next) {
        list2Node = list2Node.next;
    }

    list2Node.next = posLastRemovedNode;

    let preFirstRemovedNode: ListNode = list1;
    for(let i = 0; i < (a - 1); i++) {
        preFirstRemovedNode = preFirstRemovedNode.next;
    }

    preFirstRemovedNode.next = list2;

    return list1;
};