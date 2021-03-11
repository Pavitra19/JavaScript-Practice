/**
 * @param {number} n
 * @return {number}
 * Leetcode 204
 * Count the number of prime numbers less than a non-negative number, n.
 */

// Method 1, Sieve of Eratosthenes Algorithm
// 
var countPrimes = function (n) {
    var count = 0;
    var array = [];
    for (i = 2; i < n; i++) {
        if (array[i]) continue; // Skip numbers marked as true 
        else count++; // Count increases when number is false 
        for (j = i + i; j < n; j += i) {
            array[j] = true; // Multiples will be a composite number 
        }
    }
    return count;
};


// Time Limit Exceeded, Method 2 - Brute Force  
// O(n^2)
var isPrime = (num) => {
    for (var k = 2; k < num; k++) {
        if (num % k === 0) {
            return false;
        }
    }
    return true;

}

var countPrimes2 = function (n) {
    if (n < 2) return 0;
    var count = 0;
    for (var j = 2; j < n; j++) {
        var result = isPrime(j);
        result ? count++ : 0;
    }

    return count;
};