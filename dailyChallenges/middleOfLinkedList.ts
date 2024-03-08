class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// My First Try
function middleNode(head: ListNode | null): ListNode | null {
    if(head) {
        let linkedListLength = 1;
        let actualNode = head;
        while(actualNode.next) {
            linkedListLength++;
            actualNode = actualNode.next;
        }
        for(let i = 0; i < Math.floor(linkedListLength / 2); i++) {
            head = head!.next;
        }
        console.log(linkedListLength);
        return head;
    }
    return null
};

// My Second Try after seeing discussions (optimized)
// function middleNode(head: ListNode | null): ListNode | null {
//     if(head) {
//         let slow = head;
//         let fast = head;

//         if(!fast.next) {
//             return fast;
//         }

//         while(fast && fast.next) {
//             slow = slow.next
//             fast = fast.next.next;
//         }

//         return slow;
//     }
//     return null
// };