/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 * Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), 
 * and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.
 */
var canPlaceFlowers = function (flowerbed, n) {

    for (var i = 0; i < flowerbed.length && n !== 0; i++) {
        // If current flowerbed, one before and one after are empty, decrement n 
        if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
            n--;
            i++;
        }
    }
    return n === 0;
};