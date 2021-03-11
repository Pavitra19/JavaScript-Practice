/**
 * @param {string[]} words
 * @return {string}
 * Given a list of strings words representing an English Dictionary, find the longest word in words that can be built one 
 * character at a time by other words in words. If there is more than one possible answer, return the longest word with the 
 * smallest lexicographical order.
 * If there is no answer, return the empty string.
 */
var longestWord = function (words) {

    // Sort, lexicographical order
    words.sort();
    // Fill with possible words 
    var wordsBuilt = [];
    var longestWord = "";
    for (word of words) {
        // iterate through strings
        // wordsBuilt must contain the previous characters in order to build char by char
        if (word.length === 1 || wordsBuilt.includes(word.substring(0, word.length - 1))) {
            // replace longestWord only if the word is longer 
            if (word.length > longestWord.length) longestWord = word;
            wordsBuilt.push(word);
        }
    }
    // If there is no answer, empty string is returned
    return longestWord;
};