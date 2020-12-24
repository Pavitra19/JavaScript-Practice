/**
 * @param {string} s
 * @return {number}
 *
 * Balanced strings are those who have equal quantity of 'L' and 'R' characters.
 * Given a balanced string s split it in the maximum amount of balanced strings.
 * Return the maximum amount of splitted balanced strings.
 * Leetcode 1221
 */

// Runtime: 76 ms (faster than 82.46%), Memory Usage: 38.2 MB (less than 92.22%)
var balancedStringSplit = function (s) {
  let balance = 0;
  let answer = 0;
  // Loop from left to right maintaining a balance variable, increase it by 1 when it gets an L, otherwise decrease it by 1.
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") balance++;
    else balance--;
    if (balance === 0) answer++; // Increase the answer by 1 whenever the balance variable reaches 0
  }
  return answer;
};

var balancedStringSplit2 = function (s) {
  let balance = 0;
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === "L" ? balance++ : balance--; // clearner with a ternary statement
    if (balance === 0) answer++;
  }
  return answer;
};
