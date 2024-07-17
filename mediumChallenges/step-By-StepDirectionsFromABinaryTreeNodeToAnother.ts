// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

class GraphNode {
    val: number;
    parentNode: GraphNode | null;
    leftChild: GraphNode | null;
    rightChild: GraphNode | null;
    constructor(val: number) {
        this.val = val;
        this.parentNode = null;
        this.leftChild = null;
        this.rightChild = null;
    }
}

// First Approach - Graph DFS mapping all tree nodes and BFS path finding starting with startNode to destiny node through graph
function getDirections(root: TreeNode | null, startValue: number, destValue: number): string {
    let startNode: GraphNode;
    function registerNodesDFS(node: TreeNode, parentNode?: GraphNode): GraphNode {
        const graphNode = new GraphNode(node.val);
        if(parentNode) graphNode.parentNode = parentNode;
        if(node.left) {
            const leftGraphNode = registerNodesDFS(node.left, graphNode);
            graphNode.leftChild = leftGraphNode;
        }
        if(node.right) {
            const rightGraphNode = registerNodesDFS(node.right, graphNode);
            graphNode.rightChild = rightGraphNode;
        }
        if(node.val === startValue) startNode = graphNode;
        return graphNode;
    }
    registerNodesDFS(root!);
    function routeToNodeBFS(node: GraphNode, lastNodeVal: number, path: string = "", callStack: {node: GraphNode, lastNodeVal: number, path: string}[] = []): string {
        if(node.val === destValue) {
            return path;
        }
        if(node.parentNode && node.parentNode.val !== lastNodeVal) callStack.push({node: node.parentNode, lastNodeVal: node.val, path: path + "U"});
        if(node.leftChild && node.leftChild.val !== lastNodeVal) callStack.push({node: node.leftChild, lastNodeVal: node.val, path: path + "L"});
        if(node.rightChild && node.rightChild.val !== lastNodeVal) callStack.push({node: node.rightChild, lastNodeVal: node.val, path: path + "R"});
        const callStackEntry = callStack.pop()!;
        return routeToNodeBFS(callStackEntry.node, callStackEntry.lastNodeVal, callStackEntry.path, callStack);
    }
    let route: string = routeToNodeBFS(startNode!, 0);
    return route;
};