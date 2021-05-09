/**
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g; // || /\W/g
  s = s.toLowerCase().replace(regex, "");
  var reverse = s.split("").reverse().join("");
  return reverse === s ? true : false;
};

// initialize pointers outwards and check inwardss
// Runtime: 92 ms,Memory Usage: 40.8 MB
var isPalindrome2 = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      return false;
    }
  }

  return true;
};

// Test cases
// "A man, a plan, a canal: Panama" = true
// "race a car" = false
// "aabaa" = true
// "aabbaa" = true
// "abc" = false
// "a" = true
// " " = true
