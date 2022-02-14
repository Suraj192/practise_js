"use strict";

/**
Write the Recipe class such that it automatically console logs the string: New recipe created whenever
we create a new instance of that class.
**/
class Recipe {
  constructor() {
    console.log("New receipe created");
  }
}
let receipe1 = new Recipe();
let receipe2 = new Recipe();
