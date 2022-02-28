"use strict";

/**
Implement a function wait(milliseconds) that returns a promise and fulfills after milliseconds have elapsed.
Look at the sample usage to see how the function is being used.*/

const wait = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
};

// Sample usage - do not modify
wait(1500).then(() => {
  console.log("Done waiting.");
});
