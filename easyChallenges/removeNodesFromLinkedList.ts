// First try (7 / 32 testcases passed)
// function removeNodes(head: ListNode | null): ListNode | null {
//     let lastBiggestNode: ListNode | null = null;
//     let actualNode: ListNode | null = head;
//     while(actualNode && actualNode.next) {
//         if(actualNode.next.val > actualNode.val) {
//             if(lastBiggestNode === null || actualNode.next.val > lastBiggestNode.val) {
//                 head = actualNode.next;
//             } else {
//                 lastBiggestNode.next = actualNode.next;
//             }
//             lastBiggestNode = actualNode.next;
//         }
//         actualNode = actualNode.next;
//     }
//     return head;
// };

// First Approach (monotonic stack with node values, recreating the linked list after)
function removeNodes(head: ListNode | null): ListNode | null {
    const numberStack: number[] = [head!.val];
    let actualNode: ListNode | null = head!.next;
    while(actualNode) {
        if(actualNode.val > numberStack[numberStack.length - 1]) {
            numberStack.pop();
            while(actualNode.val > numberStack[numberStack.length - 1] && numberStack.length > 0) {
                numberStack.pop();
            }
            numberStack.push(actualNode.val);
        } else {
            numberStack.push(actualNode.val);
        }
        actualNode = actualNode.next;
    }
    const newHead = new ListNode(numberStack.shift());
    actualNode = newHead;
    for(let number of numberStack) {
        actualNode.next = new ListNode(number);
        actualNode = actualNode.next;
    }
    return newHead;
};

// Second Approach (reverse transverse with recursion and compare with the greatest value)
function removeNodes(head: ListNode | null): ListNode | null {
    let lastBiggestNode: ListNode | undefined = undefined;
    function iterateList(node: ListNode) {
        if(node.next) {
            iterateList(node.next)
        } else {
            lastBiggestNode = node;
            return node;
        }
        if(lastBiggestNode !== undefined) {
            if(node.val >= lastBiggestNode.val) {
                node.next = lastBiggestNode;
                lastBiggestNode = node;
            }
        }
        return node;
    }
    iterateList(head!);
    return lastBiggestNode!;
};