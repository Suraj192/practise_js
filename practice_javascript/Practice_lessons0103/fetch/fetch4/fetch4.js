// "use strict";

// class FetchWrapper {
//   constructor(baseURL) {
//     this.baseURL = baseURL;
//   }

//   get(endpoint) {
//     return fetch(this.baseURL + endpoint).then((response) => response.json());
//   }
// }

// /*
// Complete the checkForNewNotifications function such that it makes a fetch request to https://programmingjs-90a13-default-rtdb.europe-west1.firebasedatabase.app/notifications.json
// and return its result. Also, visualize that the result of fetch is a Promise. You should see Promise in the console.
// */
// const API = new FetchWrapper(
//   "https://programmingjs-90a13-default-rtdb.europe-west1.firebasedatabase.app/"
// );

// const getChapters = () => {
//   // TODO
//   API.get("chapters.json").then((data) => {
//     console.log(data);
//     // for (let i = 0; i < data.length; i++) {
//     //   if (data[i].isCompleted === true) {
//     //     console.log(data[i]);
//     //   }
//     const completedChapters = data.filter((chapter) => chapter.isCompleted);
//     displayCompletedChapters(completedChapters);
//   });
// };

// // do NOT modify this function
// function displayCompletedChapters(chapters) {
//   console.log("Received", chapters);
// }

// // Sample usage - do not modify
// getChapters();

fetch(
  "https://programmingjs-90a13-default-rtdb.europe-west1.firebasedatabase.app/chapters.json",
  {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: 188, isCompleted: false, title: "Lets see" }),
  }
);
