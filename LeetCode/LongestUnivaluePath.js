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
 * 
 * Given a binary tree, find the length of the longest path where each node in the path has the same value. 
 * This path may or may not pass through the root.


 */

var univaluePath = function (node, unival) {
    if (!node || node.val !== unival) return 0;
    return Math.max(univaluePath(node.left, unival), univaluePath(node.right, unival)) + 1;
}

var longestUnivaluePath = function (root) {
    if (!root) return 0;

    return Math.max(
        longestUnivaluePath(root.left),
        longestUnivaluePath(root.right),
        univaluePath(root.left, root.val) + univaluePath(root.right, root.val)
    )
};