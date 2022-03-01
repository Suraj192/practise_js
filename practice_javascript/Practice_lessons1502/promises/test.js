let p = new Promise((resolve, reject) => {
  resolve("Sucess");
}).then(() => {
  throw Error("Oh no");
});
