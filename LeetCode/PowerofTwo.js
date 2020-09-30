/**
 * @param {number} n
 * @return {boolean}
 * Given an integer n, write a function to determine if it is a power of two.
 */

// Method 1 
// Runtime: 112 ms, Memory Usage: 40 MB
var isPowerOfTwo = function (n) {
    // n.toString(2) uses the concept of radix and makes n into a string with a base of 2
    // If n is a power of 2, n.toString(2) would be 1, 10, 100, etc
    // split() makes the string into an array
    // reduce() counts the sum of each digit
    // a power of 2 will have the sum of the digits equal to 1
    return n.toString(2).split("").reduce((prev, current) => parseInt(prev) + parseInt(current)) == 1;
};

// Method 2 
// Runtime: 100 ms; Memory Usage: 40 MB
var isPowerOfTwo2 = function (n) {
    if (n === 1) return true;
    var product = 1;
    while (product <= n) {
        product = product * 2;
        if (product === n) return true;
    }

    return false;

};