/**
 * @param {string} word
 * @return {boolean}
 *
 * We define the usage of capitals in a word to be right when one of the following cases holds:
 * All letters in this word are capitals, like "USA".
 * All letters in this word are not capitals, like "leetcode".
 * Only the first letter in this word is capital, like "Google".
 * Given a string word, return true if the usage of capitals in it is right.
 */

// Runtime: 84 ms, faster than 80.30% of JavaScript online submissions for Detect Capital.
// Memory Usage: 40 MB, less than 52.53% of JavaScript online submissions for Detect Capital.
var detectCapitalUse = function (word) {
  if (word === word.toLowerCase() || word === word.toUpperCase()) {
    return true;
  }
  let lowerCase = word.toLowerCase();
  let firstLetterCap = word.charAt(0).toUpperCase() + lowerCase.slice(1);
  return word === firstLetterCap;
};
