// First Approach - Linked List solution, creating n numbered nodes and iterate through the created nodes, deleting by the k rule param
function findTheWinner(n: number, k: number): number {
    if(n === 1) return 1;
    const head: ListNode = new ListNode(1);
    let node: ListNode = head;
    for(let i: number = 2; i <= n; i++) {
        node.next = new ListNode(i);
        node = node.next;
    }
    node.next = head;
    let lastNode: ListNode = node;
    node = head;
    while(node !== node.next) {
        for(let i: number = 1; i < k; i++) {
            lastNode = node;
            node = node.next!;
        }
        lastNode.next = node.next;
        node = node.next!;
    }
    return node.val;
};