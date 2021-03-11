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
 * Given a binary tree, return the sum of values of its deepest leaves.
 * Leetcode 1302
 */

// Runtime: 104 ms (faster than 86.59%), Memory Usage: 49 MB (less than 34.87%)
var deepestLeavesSum = function (root) {
  function findTreeDepth(node) {
    if (!node) return 0;
    // at each node, the max depth between left and right subtrees must be determined
    // must add 1 to count the leaf node itself
    return Math.max(findTreeDepth(node.left), findTreeDepth(node.right)) + 1;
  }

  var depth = findTreeDepth(root);

  function sumDeepest(height, root) {
    if (!root) return 0;
    if (height === 1) return root.val; // return the value of the deepest leaf
    return (
      sumDeepest(height - 1, root.left) + sumDeepest(height - 1, root.right) // return the sum of values of the deepest leaves
    );
  }

  return sumDeepest(depth, root);
};
