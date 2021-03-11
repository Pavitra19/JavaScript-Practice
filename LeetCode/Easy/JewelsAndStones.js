/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    var count = 0;
    for (var i = 0; i < S.length; i++) {
        if (J.includes(S[i])) {
            count++;
        }
    }
    return count;
};

// method 2
var numJewelsInStones = function (J, S) {
    return S.split('').filter(char => J.includes(char)).length;
};