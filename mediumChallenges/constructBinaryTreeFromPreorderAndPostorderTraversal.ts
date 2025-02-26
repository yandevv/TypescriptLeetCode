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

// First Approach - Recursive method building the tree based on first and second element of preorder's array.
// (https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/6458109/beats-100-construct-binary-tree-from-preorder-and-postorder-traversal-dfs-solution/?envType=daily-question&envId=2025-02-23)
function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode | null {
  let index = 0;

  function construct(l: number, h: number) {
    if(index >= preorder.length || l > h)
      return null;

    let root = new TreeNode(preorder[index++]);
    if(l === h)
      return root;

    let i = l;
    while(i <= h && postorder[i] !== preorder[index])
      i++;

    if(i <= h) {
      root.left = construct(l, i);
      root.right = construct(i + 1, h - 1);
    }

    return root;
  }

  return construct(0, preorder.length - 1);
};

const case1 = constructFromPrePost([1,2,4,5,3,6,7], [4,5,2,6,7,3,1]);
const case2 = constructFromPrePost([1], [1]);

console.log(`case1:`);
console.log(case1);
console.log(`case1:`);
console.log(case2);