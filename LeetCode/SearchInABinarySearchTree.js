/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 * Given the root node of a binary search tree (BST) and a value.
 * You need to find the node in the BST that the node's value equals the given value.
 * Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.
 * Leetcode 700
 */

//Runtime: 88 ms (faster than 95.86%), Memory Usage: 45.1 MB (less than 30.34%)
var searchBST = function (root, val) {
  while (root) {
    if (root.val === val) break;
    root = root.val > val ? root.left : root.right;
  }
  return root;
};

//Runtime: 92 ms (faster than 87.93%), Memory Usage: 44.8 MB (less than 84.60%)
var searchBST2 = function (root, val) {
  if (!root) return null;
  let node = TreeNode();

  function findNode(root) {
    if (!root) return null;
    if (root.val === val) {
      node = root;
      node.right = root.right; // set the right node
      node.left = root.left; // set the left node
    }
    // if the node is > value, check the left branch, else check the right
    root.val > val ? findNode(root.left) : findNode(root.right);
  }
  findNode(root);
  return node ? node : null;
};
