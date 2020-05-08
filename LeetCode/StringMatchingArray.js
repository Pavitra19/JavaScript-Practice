/**
 * Given an array of string words. Return all strings in words which is substring of another word in 
 * any order
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    var newWords = new Set();
    for (var i = 0; i <= words.length - 2; i++) {
        for (var j = i + 1; j <= words.length - 1; j++) {
            if (words[i].includes(words[j]) || words[j].includes(words[i])) {
                newWords.add(words[j].length < words[i].length ? words[j] : words[i]);
            }
        }
    }
    return Array.from(newWords);
};