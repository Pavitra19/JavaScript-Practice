/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 *
 * Given a string s and an integer k. You should construct k non-empty palindrome strings using all the characters in s.
 * Return True if you can use all the characters in s to construct k palindrome strings or False otherwise.
 *
 * Leetcode 1400
 */

// Runtime: 116 ms, faster than 56.92% of JavaScript online submissions for Construct K Palindrome Strings.
// Memory Usage: 43.3 MB, less than 33.08% of JavaScript online submissions for Construct K Palindrome Strings.
var canConstruct = function (s, k) {
  if (s.length < k) return false;

  let letterCounts = {};
  let oddCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (!letterCounts.hasOwnProperty(s[i])) {
      letterCounts[s[i]] = 1;
    } else letterCounts[s[i]]++;
  }

  Object.values(letterCounts).forEach((count) => {
    if (count % 2 !== 0) oddCount++;
  });

  return oddCount > k ? false : true;
};
