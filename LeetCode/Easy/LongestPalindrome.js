/**
 * @param {string} s
 * @return {number}
 * Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 * Leetcode 409
 */

// Runtime: 80 ms, faster than 87.93% of JavaScript online submissions for Longest Palindrome.
// Memory Usage: 39.8 MB, less than 70.11% of JavaScript online submissions for Longest Palindrome.
// O(n) time complexity, O(n) space complexity
var longestPalindrome = function (s) {
  let nums = {};
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (!nums.hasOwnProperty(s[i])) {
      nums[s[i]] = 1; // initialize count if not already in object
    } else nums[s[i]]++; // increment count of letter
  }

  Object.keys(nums).forEach((key) => {
    total += Math.floor(nums[key] / 2) * 2; // adding all even pairs
    if (total % 2 === 0 && nums[key] % 2 === 1) {
      total += 1; // if total is even, palindrome is balanced, can add one more letter in the middle for longest length
    }
  });

  return total;
};
