/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 * Given an n-ary tree, return the postorder traversal of its nodes' values.
 * Nary-Tree input serialization is represented in their level order traversal,
 * each group of children is separated by the null value
 * Leetcode 590
 */

// Runtime: 100 ms (faster than 62.65%), Memory Usage: 42.4 MB (less than 52.65%)
var postorder = function (root) {
  var stack = [root];
  var newPost = [];
  while (stack.length > 0 && root !== null) {
    let node = stack.pop(); // pop off the last element (first one is the root)
    for (child of node.children) {
      stack.push(child); // push each child onto the stack
    }
    newPost.unshift(node.val); // add in the root to the beginning of the array
  }
  return newPost;
};

// Runtime: 88 ms (faster than 97.94%), Memory Usage: 42.9 MB (less than 21.18%)
// recursion
// Time complexity: O(n), Space complexity: O(n)
var postorder = function (root) {
  let post = [];
  traversal(root);
  return post;

  function traversal(node) {
    if (!node) return null;
    for (child of node.children) {
      traversal(child); // goes to each leaf node
    }
    post.push(node.val);
  }
};
