// My First Try
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function hasCycle(head: ListNode | null): boolean {
    if(!head) return false;
    let actualNode: ListNode = head;
    
    let passedThroughNodes: ListNode[] = [];
    while(actualNode.next) {
        if(passedThroughNodes.includes(actualNode)) return true;
        passedThroughNodes.push(actualNode);
        actualNode = actualNode.next;
    }

    return false;
};

// My Second Try after seeing discussions (optimized)
// function hasCycle(head: ListNode | null): boolean {
//     if(!head && !head?.next) return false;

//     let slow: ListNode = head;
//     let fast: ListNode = head.next;
//     while(fast && fast.next) {
//         if(fast === slow) return true;
//         slow = slow.next;
//         fast = fast.next.next;
//     }

//     return false;
// };