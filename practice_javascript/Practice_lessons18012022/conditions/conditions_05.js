"use strict";

/**
Write a function named greaterNum that:
takes 2 arguments, both numbers.
returns whichever number is the greater (higher) number.
Call that function 2 times with different number pairs, and log the output to make sure it works
(e.g. "The greater number of 5 and 10 is 10.").


/**
 * @param {numbers} 
 */

function greaterNum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 == num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(greaterNum(2, 2));
console.log(greaterNum(5, 0));
console.log(greaterNum(5, 10));
console.log(greaterNum(9, 7));
