/**
 * @param {number} num
 * @return {boolean}
 * We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.
 * Given an integer n, write a function that returns true when it is a perfect number and false when it is not.
 */
var checkPerfectNumber = function (num) {
    if (num === 0) return false;
    var count = 0;
    for (i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            count = count + i;
        }
    }

    return (count === num ? true : false);
};