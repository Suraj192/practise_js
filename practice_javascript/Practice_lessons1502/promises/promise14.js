"use strict";

/**
Complete the fakeFetch function such that it returns a promise that resolves successfully after 1 second with the following object
{
/*  departed:false
    delayed: true
}.
*/

const fakeFetch = () => {
  // TODO: implement fake fetch
  return new Promise((reslove) => {
    setTimeout(() => {
      const dataone = { departed: false, delayed: true };
      reslove(dataone);
    }, 1000);
  });
};

// Sample usage - do not modify
fakeFetch().then((data) => {
  console.log(data);
});
