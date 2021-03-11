/**
 * Given two strings s and t , write a function to determine if t is an anagram of s
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    return (s.split('').sort().join('') === t.split('').sort().join(''));
};

