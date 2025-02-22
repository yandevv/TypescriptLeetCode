// Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

// First Approach - Storing numbers and whenever next character is not a number, it store the number on the immediateNodeByDepth
// keyed by depth and to the immediate closest parent left or right attribute. (11ms - Beats 62.50%)
function recoverFromPreorder(traversal: string): TreeNode | null {
  const immediateNodeByDepth: TreeNode[] = [];

  let actualDepth = 0, actualNumber = '';
  for(let i = 0; i < traversal.length; i++) {
    if(!isNaN(parseInt(traversal[i]))) {
      actualNumber += traversal[i];

      if(isNaN(parseInt(traversal[i + 1]))) {
        if(actualDepth === 0) {
          const rootNode = new TreeNode(parseInt(actualNumber));
          immediateNodeByDepth[0] = rootNode;
        } else {
          const newNode = new TreeNode(parseInt(actualNumber));

          immediateNodeByDepth[actualDepth] = newNode;

          if(!immediateNodeByDepth[actualDepth - 1].left) {
            immediateNodeByDepth[actualDepth - 1].left = newNode;
          } else {
            immediateNodeByDepth[actualDepth - 1].right = newNode;
          }
        }

        actualDepth = 0;
        actualNumber = '';
      }

      continue;
    }

    actualDepth++;
  }

  return immediateNodeByDepth[0];
};

const case1 = recoverFromPreorder("1-2--3--4-5--6--7");
const case2 = recoverFromPreorder("1-2--3---4-5--6---7");
const case3 = recoverFromPreorder("1-401--349---90--88");

console.log(`case1:`);
console.log(case1);
console.log(`case2:`);
console.log(case2);
console.log(`case3:`);
console.log(case3);