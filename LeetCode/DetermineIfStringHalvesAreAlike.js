/**
 * @param {string} s
 * @return {boolean}
 * You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.
 * Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.
 * Return true if a and b are alike. Otherwise, return false.
 * Leetcode 1704
 */

// Runtime: 76 ms (faster than 94.89%). Memory Usage: 39.2 MB (less than 62.04%)
var halvesAreAlike = function (s) {
  let spliceLen = s.length / 2;
  let rightWord = s.slice(0, spliceLen); // first half of string
  let leftWord = s.slice(spliceLen); // second half of string
  let rightCount = 0;
  let leftCount = 0;
  for (let i = 0; i < spliceLen; i++) {
    // check each char in the two halves
    if (checkVowel(rightWord[i]) === true) rightCount++;
    if (checkVowel(leftWord[i]) === true) leftCount++;
  }
  return rightCount === leftCount ? true : false;
};

var checkVowel = function (char) {
  let vowels = "aeiouAEIOU";
  return vowels.includes(char) ? true : false; // return true if char is a vowel
};
