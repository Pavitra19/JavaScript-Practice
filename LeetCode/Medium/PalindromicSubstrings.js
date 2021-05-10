/**
 * @param {string} s
 * @return {number}
 *
 * Given a string s, return the number of palindromic substrings in it.
 * A string is a palindrome when it reads the same backward as forward.
 * A substring is a contiguous sequence of characters within the string.
 *
 * Leetcode 647
 */

// Runtime: 72 ms, faster than 99.75% of JavaScript online submissions for Palindromic Substrings.
// Memory Usage: 39.2 MB, less than 83.38% of JavaScript online submissions for Palindromic Substrings.
var countSubstrings = function (s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    checkPalidrome(i, i);
    checkPalidrome(i, i + 1);
  }

  return count;

  function checkPalidrome(low, high) {
    console.log(low, high);
    while (low >= 0 && high < s.length && s[low] === s[high]) {
      low--;
      high++;
      count++;
    }
  }
};
