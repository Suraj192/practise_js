"use strict";

/**
Complete the function getPositiveTemperatures such that it returns an array containing the positive temperatures (the temperatures that are above 0).
Use an arrow function (implicit return is optional).
/**
 * @param {number} value
 */
const getPositiveTemperatures = (numbers) =>
  numbers.filter((number) => number > 0);

// Sample usage - do not modify
console.log(getPositiveTemperatures([2, 4])); // 8
console.log(getPositiveTemperatures([-1, 0, 3, 7, 9])); // 9
