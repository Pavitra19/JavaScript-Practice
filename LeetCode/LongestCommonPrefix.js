/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // if no words, return empty string 
    maxPrefix = ""
    if (!strs.length) return maxPrefix;

    // Loop through characters 
    for (var i = 0; i < strs[0].length; i++) {
        var character = strs[0][i];
        for (var char = 0; char < strs.length; char++) {
            if (strs[char][i] !== character) return maxPrefix
        }
        maxPrefix = maxPrefix + character
    }
    return maxPrefix
};