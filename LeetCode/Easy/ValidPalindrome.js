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

  // initialize left/right pointers at start and end of string
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      return false;
    }
  }

  return true;
};

// Runtime: 88 ms, faster than 91.01% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 41.1 MB, less than 74.48% of JavaScript online submissions
var isPalindrome3 = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let i = Math.floor(s.length / 2); // initialize pointer in middle
  let j = s.length % 2 === 0 ? i - 1 : i; // if string is even, j pointer will be behind right pointer, so that left/right pointers are pointing at the 2 middle values

  // loop through the string while moving pointers outwards comparing the characters
  while (i >= 0 && j < s.length) {
    if (s[i] !== s[j]) {
      return false;
    }

    i--;
    j++;
  }

  return true;
};

// Runtime: 92 ms, faster than 81.09% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 43.1 MB, less than 47.73% of JavaScript online submissions for Valid Palindrome.
var isPalindrome4 = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let sReversed = "";

  // reverse string with for loop
  for (let j = s.length - 1; j >= 0; j--) {
    sReversed += s[j];
  }

  // compare reversed string with original
  return sReversed === s;
};

// Test cases
// "A man, a plan, a canal: Panama" = true
// "race a car" = false
// "aabaa" = true
// "aabbaa" = true
// "abc" = false
// "a" = true
// " " = true
