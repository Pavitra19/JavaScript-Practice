/**
 * Write a program that outputs the string representation of numbers from 1 to n.
 * But for multiples of three it should output “Fizz” instead of the number 
 * for the multiples of five output “Buzz”. 
 * For numbers which are multiples of both three and five output “FizzBuzz”.
 * @param {number} n
 * @return {string[]}
 */

// method 1 
var fizzBuzz1 = function (n) {
    return new Array(n).fill(0).map((ind, num) => (++num % 3 ? '' : 'Fizz') + (num % 5 ? '' : 'Buzz') || '' + num);
};

// method 2
var fizzBuzz = function (n) {
    var result = [];
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) result.push("FizzBuzz");
        else if (i % 3 === 0) result.push("Fizz");
        else if (i % 5 === 0) result.push("Buzz");
        else result.push("" + i);
    }
    return result;

}; 