// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// First  Approach - Iteration through linked list and comparing the last three elements iterated and registering the first and last critical point indices, and calculating the min and max distance between critical points by starting by index -1 to compensate
function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
    if(!head) return [-1, -1];
    let firstCritPointIndex: number = -1, lastCritPointIndex: number = -1;
    let lastThreeNodes: number[] = [];
    let answer: number[] = [Number.POSITIVE_INFINITY, -1];
    let node: ListNode | null = head;
    let index: number = -1;
    while(node) {
        lastThreeNodes[0] = lastThreeNodes[1];
        lastThreeNodes[1] = lastThreeNodes[2];
        lastThreeNodes[2] = node.val;
        node = node.next;
        index++;
        if(lastThreeNodes[0] !== undefined) {
            const isMinima: boolean = lastThreeNodes[1] < lastThreeNodes[0] && lastThreeNodes[1] < lastThreeNodes[2];
            const isMaxima: boolean = lastThreeNodes[1] > lastThreeNodes[0] && lastThreeNodes[1] > lastThreeNodes[2];
            if(isMinima || isMaxima) {
                if(firstCritPointIndex !== -1) {
                    answer[1] = Math.max(answer[1], index - firstCritPointIndex);
                } else {
                    firstCritPointIndex = index;
                }
                if(lastCritPointIndex !== -1) answer[0] = Math.min(answer[0], index - lastCritPointIndex);
                lastCritPointIndex = index;
            }
        }
    }
    if(answer[1] === -1) return [-1, -1];
    return answer;
};