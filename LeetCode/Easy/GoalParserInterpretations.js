/**
 * @param {string} command
 * @return {string}
 * You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" 
 * and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", 
 * and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.
 * 
 * Given the string command, return the Goal Parser's interpretation of command.
 * 
 * Leetcode 1678
 */

// Method 1: Runtime: 80 ms (faster than 65.79%), Memory Usage: 38.6 MB (less than 35.44%)
// To replace all instances of a value, /g is the global modifier
// regex syntax: /regex/
// \( matches the character ( literally (case insensitive), \) matches the character ) literally (case insensitive)
var interpret = function (command) {
    return command.replace(/\(al\)/g, "al").replace(/\(\)/g, "o");
};

// Method 2: Runtime: 80 ms (faster than 65.79%), Memory Usage: 38.4 MB (less than 71.19%)
// split string at chars that must be replaced, then rejoin with the correct char
var interpret = function (command) {
    return command.split("()").join("o").split("(al)").join("al");
};

// Method 3: Runtime: 76 ms (faster than 84.75%), Memory Usage: 38.6 MB (less than 35.44%)
var interpret3 = function (command) {
    let endString = "";
    for (let i = 0; i < command.length; i++) {
        if (command[i] === "G") endString += "G";
        else if (command[i] === "(" && command[i + 1] === "a") {
            endString += "al";
            i + 3; // since the next chars will be "al)", can increment i to interpret the next new char 
        }
        else if (command[i] === "(") {
            endString += "o";
            i + 2; // since the next char will be ")", can increment i to interpret the next new char
        };
    }
    return endString;
};

// Method 4: Runtime: 72 ms (faster than 94.76%), Memory Usage: 38.6 MB, (less than 55.78%)
var interpret4 = function (command) {
    let endString = "";
    for (let i = 0; i < command.length; i++) {
        if (command[i] === "G") endString += "G";
        else if (command[i] === "(" && command[i + 1] === "a") endString += "al";
        else if (command[i] === "(") endString += "o";
    }
    return endString;
};