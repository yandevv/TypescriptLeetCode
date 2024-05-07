// First try (Traverse the linked list and save it into a variable to be doubled after - JavaScript int limitation) (1054 / 1265 testcases passed)
// function doubleIt(head: ListNode | null): ListNode | null {
//     let numberString: string = '';
//     let actualNode: ListNode | null = head!;
//     while(actualNode) {
//         numberString += actualNode.val;
//         actualNode = actualNode.next;
//     };
//     let doubledNumArray: string[] = (parseInt(numberString) * 2).toString().split("");
//     const newHead: ListNode = new ListNode(parseInt(doubledNumArray.shift()!));
//     actualNode = newHead;
//     while(doubledNumArray.length > 0) {
//         actualNode.next = new ListNode(parseInt(doubledNumArray.shift()!));
//         actualNode = actualNode.next;
//     }
//     return newHead;
// };

// First Approach (two-pointer transverse doubling the value and summing up the carry with the previous node)
function doubleIt(head: ListNode | null): ListNode | null {
    let lastNode: ListNode | undefined;
    let actualNode = head;
    while(actualNode) {
        const doubledNumber = actualNode.val * 2;
        const splittedDoubledNumber = doubledNumber.toString().split("");
        if(splittedDoubledNumber.length > 1) {
            if(lastNode !== undefined) {
                lastNode.val += parseInt(splittedDoubledNumber[0]);
                actualNode.val = parseInt(splittedDoubledNumber[1]);
            } else {
                const newNode = new ListNode(parseInt(splittedDoubledNumber[1]), actualNode.next);
                actualNode.next = newNode;
                actualNode.val = parseInt(splittedDoubledNumber[0]);
            }
        } else {
            actualNode.val = doubledNumber;
        }
        if(splittedDoubledNumber.length > 1 && lastNode === undefined) {
            lastNode = actualNode.next!;
            actualNode = actualNode.next!.next;
            continue;
        }
        lastNode = actualNode;
        actualNode = actualNode.next;
    }
    return head;
};