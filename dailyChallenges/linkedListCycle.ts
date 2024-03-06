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