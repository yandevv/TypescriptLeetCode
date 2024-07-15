// Definition for a binary tree node.
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.left = (left===undefined ? null : left);
        this.right = (right===undefined ? null : right);
    }
}

function createBinaryTree(descriptions: number[][]): TreeNode | null {
    const nodes: Map<number, TreeNode> = new Map();
    const hasParent: Map<number, boolean> = new Map();
    descriptions.forEach((description) => {
        if(!hasParent.has(description[0])) hasParent.set(description[0], false);
        hasParent.set(description[1], true);
        if(!nodes.has(description[1])) nodes.set(description[1], new TreeNode(description[1]));
        const childNode: TreeNode = nodes.get(description[1])!;
        if(!nodes.has(description[0])) {
            const parentNode: TreeNode = new TreeNode(description[0]);
            nodes.set(description[0], parentNode);
        };
        const parentNode: TreeNode = nodes.get(description[0])!;
        if(description[2]) {
            parentNode.left = childNode;
        } else {
            parentNode.right = childNode;
        }
        nodes.set(description[0], parentNode);
    });
    let root: TreeNode | null = null;
    for(let key of hasParent.entries()) {
        if(!key[1]) {
            root = nodes.get(key[0])!
            break;
        };
    }
    return root;
};