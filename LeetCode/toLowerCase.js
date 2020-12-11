/**
 * @param {string} str
 * @return {string}
 * Implement function ToLowerCase() that has a string parameter str, and returns the same 
 * string in lowercase.
 */
var toLowerCase = function (str) {
    lowerCase = '';
    for (var i = 0; i < str.length; i++) {
        let value = str.charCodeAt(i);
        // Uppercase Letters − A - Z having ASCII values from 65 - 90 
        // Lowercase Letter − a - z having ASCII values from 97 - 122
        if (value >= 65 && value <= 90) {
            lowerCase += String.fromCharCode(value + 32); // add 32 to convert to lowercase
        } else {
            // add to string if already lowercase
            lowerCase += str[i]
        }
    }
    return (lowerCase);
};