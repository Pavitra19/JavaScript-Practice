/** Design a parking system for a parking lot.
 * The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.
 * Leetcode 1603
 */

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 * Initializes object of the ParkingSystem class. The number of slots for each parking space are given as part
 * of the constructor.
 */

// Runtime: 136 ms (faster than  99.24%), Memory Usage: 45.6 MB (less than 94.28%)
var ParkingSystem = function (big, medium, small) {
  this.carCount = [big, medium, small];
};

/**
 * @param {number} carType
 * @return {boolean}
 * Checks whether there is a parking space of carType for the car that wants to get into the parking lot.
 * carType can be of three kinds: big, medium, or small, which are represented by 1, 2, and 3 respectively.
 * A car can only park in a parking space of its carType.
 * If there is no space available, return false, else park the car in that size space and return true.
 */
ParkingSystem.prototype.addCar = function (carType) {
  return this.carCount[carType - 1]-- > 0;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
