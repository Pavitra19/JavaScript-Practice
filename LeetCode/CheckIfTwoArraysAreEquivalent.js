/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 * 
 * Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
 * A string is represented by an array if the array elements concatenated in order forms the string.
 * Leetcode 1662
 */

// Method 1
// Runtime: 72 ms (93.11% faster), Memory Usage: 39 MB (10.29% less)
var arrayStringsAreEqual = function (word1, word2) {
    return word1.toString().split(',').join('') === word2.toString().split(',').join('');
};

// Method 2
// Runtime: 80 ms (faster than 55.77%), Memory Usage: 38.7 MB (less than 38.17%)
var arrayStringsAreEqual2 = function (word1, word2) {
    return word1.join('') === word2.join('');
};