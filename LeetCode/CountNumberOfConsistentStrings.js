/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 * 
 * You are given a string allowed consisting of distinct characters and an array of strings words. 
 * A string is consistent if all characters in the string appear in the string allowed.
 * Return the number of consistent strings in the array words.
 * Leetcode 1684
 */

// Runtime: 108 ms (faster than 94.85%), Memory Usage: 49.1 MB (less than 33.48%)
var countConsistentStrings = function(allowed, words) {
    let count = 0;
    // loop through each string
    for(string in words){
        let wordLen = words[string].length;
        // loop through each char in each string
        for(let i = 0; i < wordLen; i++ ){
            let wordChar = words[string][i];
             if(!(allowed.includes(wordChar))) {
                 break; // if the char is not in the string of allowed chars, break loop and go to the next string
             } else if(i === wordLen - 1) count++ // if it's the last char in the string, increment counter
        }
    }
    return count;
};

// Runtime: 148 ms (faster than 27.04%), Memory Usage: 49 MB (less than 35.62%)
var countConsistentStrings2 = function(allowed, words) {
    let count = 0;
    let allowedWords = new Set(allowed);
    for(string in words){
        let wordLen = words[string].length;
        for(let i = 0; i < wordLen; i++ ){
            let wordChar = words[string][i];
             if(!(allowedWords.has(wordChar))) {
                 break;
             } else if(i === wordLen - 1) count++ 
        }
    }
    return count;
};
/* Runtime: 140 ms (faster than 31.33%), Memory Usage: 51.9 MB (less than 20.17%)
* The every() method tests returns a boolean based on whether all elements in the array pass the test 
* implemented by the provided function. Length provides number of strings that pass the requirement */
var countConsistentStrings3 = function(allowed, words) {
    let allowedChars = new Set(allowed); // create set to remove duplicate chars in allowed
    return words.filter(word => word.split('').every(char => allowedChars.has(char))).length
};