/**
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g; // || /\W/g
    s = s.toLowerCase().replace(regex, '');
    var reverse = s.split('').reverse().join('');
    return (reverse === s ? true : false);
};
