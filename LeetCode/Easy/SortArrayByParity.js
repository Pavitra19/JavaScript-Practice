/**
 * Given an array A of non-negative integers, return an array consisting of all the even elements of A, 
 * followed by all the odd elements of A.

 * @param {number[]} A
 * @return {number[]}
 */

// method 1
var sortArrayByParity = function (A) {
    // sort from lowest to highest based on answer to % 2
    A.sort((a, b) => (a % 2) - (b % 2));
    return A;
};

// method 2
var sortArrayByParity2 = function (A) {
    return [...A.filter(num => num % 2 === 0), ...A.filter(num => num % 2 !== 0)];
};