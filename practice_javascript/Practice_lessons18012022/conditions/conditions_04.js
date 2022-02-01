"use strict";

/**
Complete the function evenOrOdd such that it returns the string "even"
when the number parameter it receives is even and "odd" otherwise.

Tests
Implements evenOrOdd() for even numbers
Implements evenOrOdd() for odd numbers
/**
 * @param {string} number
 */
function evenOrOdd(number) {
  if (number == 0) {
    return "let's given positive integer as an input";
  } else if (number % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(evenOrOdd(0));
console.log(evenOrOdd(1));
console.log(evenOrOdd(5));
console.log(evenOrOdd(8));
