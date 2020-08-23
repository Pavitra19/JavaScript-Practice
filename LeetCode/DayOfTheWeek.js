/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */

const findDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var dayOfTheWeek = function (day, month, year) {
    // JS counts months from 0 to 11, subtract 1 from month 
    // new Date obj takes in year, month, day 
    return findDay[new Date(year, month - 1, day).getDay()];
};