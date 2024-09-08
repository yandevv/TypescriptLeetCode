// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val);
      this.next = (next === undefined ? null : next);
  }
}

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

// First Try - DFSing and carrying on an actualIndex verifying with nums vector. (Wrong Answer - 65/67 testcases passed)
function isSubPath(head: ListNode | null, root: TreeNode | null): boolean {
function dfs(treeNode: TreeNode, nums: number[], actualIndex: number = 0): boolean {
  if(treeNode.val !== nums[actualIndex]) {
    actualIndex = 0;
  }
  if(treeNode.val === nums[actualIndex]) {
    actualIndex++;
  }
  if(actualIndex === nums.length)
    return true;
  if(treeNode.left) {
    if(dfs(treeNode.left, nums, actualIndex))
      return true;
  }
  if(treeNode.right) {
    if(dfs(treeNode.right, nums, actualIndex))
      return true;
  }
  return false;
}

const nums: number[] = [];
while(head) {
  nums.push(head.val);
  head = head.next;
}

const res = dfs(root!, nums);
return res;
};

// First Approach - DFS method backtracking when the value doesn't match, tracking by head and current node from linked list. (68ms - Beats 81.46%)
function isSubPath(head: ListNode | null, root: TreeNode | null): boolean {
function dfs(head: ListNode | null, cur: ListNode | null, root: TreeNode | null): boolean {
  if(cur === null)
    return true;

  if(root === null)
    return false;

  if(cur.val === root.val) {
    cur = cur.next;
  } else if(head?.val === root.val) {
    head = head?.next ?? null;
  } else {
    cur = head;
  }

  return dfs(head, cur, root.left) || dfs(head, cur, root.right);
}

return dfs(head, head, root);
};