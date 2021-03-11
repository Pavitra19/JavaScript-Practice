/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 * You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item.
 * You are also given a rule represented by two strings, ruleKey and ruleValue.
 * The ith item is said to match the rule if one of the following is true:
 * ruleKey == "type" and ruleValue == typei.
 * ruleKey == "color" and ruleValue == colori.
 * ruleKey == "name" and ruleValue == namei.
 * Return the number of items that match the given rule.
 *
 * Leetcode 1773
 */

// Runtime: 80 ms (faster than 100.00% of JavaScript submissions), Memory Usage: 42.6 MB (less than 100.00% of JavaScript submissions)
var countMatches = function (items, ruleKey, ruleValue) {
  const index = {
    type: 0,
    color: 1,
    name: 2,
  };

  return items.filter((item) => item[index[ruleKey]] === ruleValue).length;
};

// Runtime: 88 ms (faster than 100.00% of JavaScript submissions), Memory Usage: 42.7 MB (less than 100.00% of JavaScript submissions)
var countMatches2 = function (items, ruleKey, ruleValue) {
  var index;
  var count = 0;
  if (ruleKey === "type") index = 0;
  else if (ruleKey === "color") index = 1;
  else index = 2;

  for (var i = 0; i < items.length; i++) {
    if (items[i][index] === ruleValue) count++;
  }
  return count;
};
