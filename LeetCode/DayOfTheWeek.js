/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 * Given a date, return the corresponding day of the week for that date.
 */

const findDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var dayOfTheWeek = function (day, month, year) {
    // JS counts months from 0 to 11, subtract 1 from month 
    // new Date obj takes in year, month, day 
    return findDay[new Date(year, month - 1, day).getDay()];
};