// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.left = (left === undefined ? null : left)
//         this.right = (right === undefined ? null : right)
//     }
// }

function concatNumbers(node: TreeNode | null, lastText: string, numbers: number[]): void {
    if(node) {
        if(!node.right && !node.left) {
            numbers.push(parseInt(lastText + node.val));
            return;
        }
    
        if(node.left) { 
            concatNumbers(node.left, lastText + node.val, numbers);
        }
    
        if(node.right) {
            concatNumbers(node.right, lastText + node.val, numbers);
        }
    }
}

function sumNumbers(root: TreeNode | null): number {
    let numbers: number[] = [];

    concatNumbers(root, '', numbers);

    return numbers.reduce((prev, curr) => prev + curr);
};