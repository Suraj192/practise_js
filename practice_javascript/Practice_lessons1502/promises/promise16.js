"use strict";

/**
Implement the function failAfter(milliseconds) that returns a promise
and fails after milliseconds have elapsed.
It should fail with the following message:
"You asked me to fail after Xms and I did!" where X is replaced by milliseconds..*/

// TODO: implement failAfter(milliseconds)
const failAfter = (X) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`You asked me to fail after ${X}ms and I did!`);
    }, X);
  });
};

// Sample usage - do not modify
failAfter(1500).catch((error) => {
  console.error(error); // "You asked me to fail after 1500ms and I did!"
});
