/**
 * Given the array-form A of a non-negative integer X, return the array-form of the integer X+K.
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
    var newNum = A.join('');
    newNum = BigInt(newNum) + BigInt(K);
    newNum = ('' + newNum).split('');
    return (newNum);
};