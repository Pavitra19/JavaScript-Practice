/**
 * @param {number} n
 * @return {boolean}
 * Given an integer, write a function to determine if it is a power of three.
 */

// Method 1
// Runtime: 220 ms; Memory Usage: 49.6 MB
var isPowerOfThree = function (n) {
    if (n === 1) return true;
    var x = 1;
    while (x <= n) {
        x = x * 3;
        if (x === n) return true;
    }
    return false;
};

// Method 2 
var isPowerOfThree2 = function (n) {
    // n.toString(3) uses the concept of radix and makes n into a string with a base of 3
    // If n is a power of 3, n.toString(3) would be 1, 10, 100, etc
    // split() makes the string into an array
    // reduce() counts the sum of each digit
    // a power of 3 will have the sum of the digits equal to 1
    return n.toString(3).split("").reduce((prev, current) => parseInt(prev) + parseInt(current)) == 1;
};