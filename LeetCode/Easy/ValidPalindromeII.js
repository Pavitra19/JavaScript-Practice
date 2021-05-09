/**
 * @param {string} s
 * @return {boolean}
 *
 * Given a string s, return true if the s can be palindrome after deleting at most one character from it.
 * Leetcode 680
 */

// Consider a palindrome as an almost palindrome, return true

// Runtime: 92 ms, faster than 90.08% of JavaScript online submissions for Valid Palindrome II.
// Memory Usage: 45.8 MB, less than 83.52 % of JavaScript online submissions for Valid Palindrome II.
var validPalindrome = function (s) {
  if (s.length <= 2) return true;
  let count = 0;

  const checkPalindrome = (word) => {
    for (let i = 0, j = word.length - 1; i < j; i++, j--) {
      if (word[i] !== word[j]) {
        count++;
        if (count > 1) {
          return false;
        }

        return (
          checkPalindrome(word.slice(0, i) + word.slice(i + 1)) ||
          checkPalindrome(word.slice(0, j) + word.slice(j + 1))
        );
      }
    }
    return true;
  };

  return checkPalindrome(s);
};
