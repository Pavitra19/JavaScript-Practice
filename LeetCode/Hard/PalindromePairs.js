/**
 * @param {string[]} words
 * @return {number[][]}
 *
 * Given a list of unique words, return all the pairs of the distinct indices (i, j) in the given list,
 * so that the concatenation of the two words words[i] + words[j] is a palindrome.
 *
 * Leetcode 336
 */

// Runtime: 3040 ms, faster than 18.58% of JavaScript online submissions for Palindrome Pairs.
// Memory Usage: 50 MB, less than 81.42 % of JavaScript online submissions for Palindrome Pairs.
var palindromePairs = function (words) {
  let indices = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (checkPalindrome(words[i] + words[j]) && i !== j) indices.push([i, j]);
    }
  }
  return indices;
};

var checkPalindrome = function (words) {
  let left = 0;
  let right = words.length - 1;
  while (left < right) {
    if (words[left] !== words[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
