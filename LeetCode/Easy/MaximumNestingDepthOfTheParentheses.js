/**
 * @param {string} s
 * @return {number}
 * Given a VPS represented as string s, return the nesting depth of s.
 * Leetcode 1614
 */

// Runtime: 76 ms (faster than 87.10%),Memory Usage: 38.6 MB (less than 76.04%)
var maxDepth = function (s) {
  if (!s.includes("(")) return 0;
  let leftBracks = 0;
  let rightBracks = 0;
  let maxDepth = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === "(") leftBracks++;
    if (s[i] === ")") rightBracks++;
    let depth = leftBracks - rightBracks; // The depth of any character in the VPS is the (# of left brackets before it) - (# of right brackets before it)
    maxDepth = Math.max(depth, maxDepth);
  }
  return maxDepth;
};

// Runtime: 80 ms (faster than 73.12%), Memory Usage: 38.6 MB (less than 76.04%)
var maxDepth2 = function (s) {
  let bracksCount = 0; // count open brackets
  let maxDepth = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      bracksCount++;
      maxDepth = Math.max(bracksCount, maxDepth);
    }
    if (s[i] === ")") bracksCount--;
  }
  return maxDepth;
};
