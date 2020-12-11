/**
 * @param {number[][]} accounts
 * @return {number}
 * You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ 
 * customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
 * A customer's wealth is the amount of money they have in all their bank accounts. 
 * The richest customer is the customer that has the maximum wealth.
 */

// Method 1 
// spread operator to get max of array
var maximumWealth = function (accounts) {
    return Math.max(...accounts.map((customer) => customer.reduce((a, b) => a + b))); // return the max of each array's sum
};

// Method 2 
var maximumWealth2 = function (accounts) {
    var max = 0;
    for (var i = 0; i < accounts.length; i++) {
        accounts[i] = accounts[i].reduce((a, b) => a + b); // sum up the elements in each array
        if (accounts[i] > max) max = accounts[i]; // replace max if the sum of the array is greater 
    }
    return max;
};