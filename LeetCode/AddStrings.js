/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * 
 * Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
 */
var addStrings = function (num1, num2) {
    var result = "";
    var number1 = num1.length - 1;
    var number2 = num2.length - 1;
    var carryOver = 0;
    for (number1, number2; number1 >= 0 || number2 >= 0 || carryOver === 1; number1--, number2--) {
        var digit1 = number1 >= 0 ? num1.charCodeAt(number1) - '0'.charCodeAt(0) : 0;
        var digit2 = number2 >= 0 ? num2.charCodeAt(number2) - '0'.charCodeAt(0) : 0;
        var value = (digit1 + digit2 + carryOver) % 10;
        result = value + result;
        carryOver = Math.floor((carryOver + digit1 + digit2) / 10);

    }

    return result;
};