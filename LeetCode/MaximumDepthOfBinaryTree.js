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
 * @return {number}
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node
 * down to the farthest leaf node.
 * Leetcode 104
 */

// Runtime: 84 ms (faster than 83.79%), Memory Usage: 41.4 MB (less than 70.56%)
// DFS (Recursion)
// Runtime: O(n)
var maxDepth = function (root) {
  if (!root) return null; // 0 depth
  // find max of left and right subtree, then add 1 to include current node itself
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
