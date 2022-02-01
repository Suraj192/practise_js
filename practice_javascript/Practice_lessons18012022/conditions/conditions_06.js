"use strict";

/**
Write a function named assignGrade that:
takes 1 argument, a number score.
returns a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works.

/**
 * @param {string}
 */

function assignGrade(score) {
  if (score <= 20) {
    return "F";
  } else if (score <= 40) {
    return "D";
  } else if (score <= 60) {
    return "C";
  } else if (score <= 80) {
    return "B";
  } else if (score <= 100) {
    return "A";
  } else if ((score < 0) | (score > 100)) {
    return "error";
  }
}

console.log(assignGrade(13));
console.log(assignGrade(45));
console.log(assignGrade(34));
console.log(assignGrade(55));
console.log(assignGrade(67));
console.log(assignGrade(88));
console.log(assignGrade(97));
console.log(assignGrade(-1));
console.log(assignGrade(130));

console.log("You got a " + assignGrade(95));
console.log("You got a " + assignGrade(65));
