/**
 * @param {string} sentence
 * @return {boolean}
 *
 * A pangram is a sentence where every letter of the English alphabet appears at least once.
 * Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
 *
 * Leetcode 1832
 */

// Runtime: 68 ms, faster than 99.04% of JavaScript online submissions for Check if the Sentence Is Pangram.
// Memory Usage: 40.2 MB, less than 25.48% of JavaScript online submissions for Check if the Sentence Is Pangram.
var checkIfPangram = function (sentence) {
  return new Set(sentence).size === 26;
};

// Runtime: 84 ms, faster than 45.74% of JavaScript online submissions for Check if the Sentence Is Pangram.
// Memory Usage: 38.8 MB, less than 70.88% of JavaScript online submissions for Check if the Sentence Is Pangram.
var checkIfPangram2 = function (sentence) {
  let letters = new Set();
  for (let i = 0; i < sentence.length; i++) {
    letters.add(sentence[i]);
  }
  return letters.size === 26;
};
