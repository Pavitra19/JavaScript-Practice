/**
 * @param {string} s
 * @return {boolean}
 *
 * Given a string s, return true if the s can be palindrome after deleting at most one character from it.
 * Leetcode 680
 */

// Consider a palindrome as an almost palindrome, return true

// Runtime: 96 ms, faster than 79.48% of JavaScript online submissions for Valid Palindrome II.
// Memory Usage: 45.9 MB, less than 65.37% of JavaScript online submissions for Valid Palindrome II.
// Time complexity: O(n), space complexity: O(1)
var checkPalindrome = function (s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

var validPalindrome = function (s) {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        checkPalindrome(s, left + 1, right) ||
        checkPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
};

// Runtime: 92 ms, faster than 90.08% of JavaScript online submissions for Valid Palindrome II.
// Memory Usage: 45.8 MB, less than 83.52 % of JavaScript online submissions for Valid Palindrome II.
var validPalindrome2 = function (s) {
  if (s.length <= 2) return true; // length of 2 characters or less will always be an almost palindrome
  let count = 0;

  const checkPalindrome = (word) => {
    for (let i = 0, j = word.length - 1; i < j; i++, j--) {
      if (word[i] !== word[j]) {
        count++;
        if (count > 1) {
          return false; // if count exceeds 1, not an almost palindrome
        }

        // If there is conflict of two characters that don't match,  generate both strings and
        //  validate if either of those are palindromes and then from there return, true or false, depending
        // on if either is a palindrome or neither is a palindrome.
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

// Runtime: 96 ms, faster than 79.64% of JavaScript online submissions for Valid Palindrome II.
// Memory Usage: 45.8 MB, less than 83.52% of JavaScript online submissions for Valid Palindrome II.
var validPalindrome3 = function (s) {
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
          // check the remaining letters since the other letters are already palindromes
          checkPalindrome(word.slice(i, j)) ||
          checkPalindrome(word.slice(i + 1, j + 1))
        );
      }
    }
    return true;
  };

  return checkPalindrome(s);
};
// Test cases
// "raceacar" = true
// "abccdba" = true
// "abcdefdba" = false
// "ab" = true
// "a" = true
// "" = true
