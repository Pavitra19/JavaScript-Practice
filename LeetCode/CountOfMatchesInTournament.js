/**
 * @param {number} n
 * @return {number}
 * You are given an integer n, the number of teams in a tournament that has strange rules:
 * If the current number of teams is even, each team gets paired with another team.
 * A total of n / 2 matches are played, and n / 2 teams advance to the next round.
 * If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired.
 * A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
 * Return the number of matches played in the tournament until a winner is decided.
 *
 * Leetcode 1688
 *
 */

// Runtime: 80 ms (faster than 71.70%), Memory Usage: 38.8 MB (less than 15.41%)
var numberOfMatches = function (n) {
  let totalMatches = 0;
  while (n > 1) {
    let matches = Math.floor(n / 2);
    totalMatches += matches;
    n = n - matches;
  }
  return totalMatches;
};

// Runtime: 80 ms (faster than 71.70%), Memory Usage: 38.7 MB (less than 24.21%)
var numberOfMatches2 = function (n) {
  let matches = 0;
  let numMatches = 0;
  while (n > 1) {
    // if odd even number of teams
    if (n % 2 === 0) {
      matches = n / 2;
      n = n / 2;
    } else {
      matches = (n - 1) / 2;
      n = (n - 1) / 2 + 1;
    }
    numMatches += matches; // total matches is the sum of matches
  }
  return numMatches;
};
