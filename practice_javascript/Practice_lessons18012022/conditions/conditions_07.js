"use strict";

/**
Write a function named pluralize that:
takes 2 arguments, a noun and a number.
returns the number and pluralized form, like "5 cats" or "1 dog".
Call that function for a few different scores and log the result to make sure it works.
Bonus: Make it handle a few collective nouns like "sheep" and "geese".

/**
 * @param {string}
 */

function pluralize(noun, number) {
  noun = noun.toLowerCase();
  let var1 = noun.substring(noun.length - 2, noun.length); // for last two letter of word
  let var2 = noun[noun.length - 1]; // for the last letter of word
  let var3 = ["child", "man", "person", "goose", "mouse", "barracks", "deer"];
  let var4 = noun.substring(noun.length - 3, noun.length);
  let var5 = noun.substring(0, noun.length - 3);
  if ((number == 1) | (number == 0)) {
    return `${number} ${noun}`;
  } else if ((var1 == "ch") & (number > 1)) {
    return `${number} ${noun}es`;
  } else if ((noun == var3[5]) & (number > 1)) {
    return `${number} barracks`;
  } else if (((number > 1) & (var2 == "x")) | ((number > 1) & (var2 == "s"))) {
    return `${number} ${noun}es`;
  } else if ((noun == var3[0]) & (number > 1)) {
    return `${number} ${noun}ren`;
  } else if ((var4 == var3[1]) & (number > 1)) {
    return `${number} ${var5}men`;
  } else if ((noun == var3[2]) & (number > 1)) {
    return `${number} people`;
  } else if ((noun == var3[3]) & (number > 1)) {
    return `${number} geese`;
  } else if ((noun == var3[4]) & (number > 1)) {
    return `${number} mice`;
  } else if ((noun == var3[6]) & (number > 1)) {
    return `${number} deer`;
  } else if (noun == "sheep") {
    return `${number} sheep`;
  } else if (number > 1) {
    return `${number} ${noun}s`;
  }
}
console.log("I have " + pluralize("cat", 0));
console.log("I have " + pluralize("cat", 1));
console.log("I have " + pluralize("cat", 2));
console.log("I have " + pluralize("witch", 2));
console.log("I have " + pluralize("box", 2));
console.log("I have " + pluralize("bus", 2));
console.log("I have " + pluralize("bus", 1));
console.log(pluralize("child", 2));
console.log(pluralize("woman", 2));
console.log(pluralize("person", 2));
console.log(pluralize("goose", 2));
console.log(pluralize("mouse", 2));
console.log(pluralize("barracks", 2));
console.log(pluralize("deer", 2));
console.log(pluralize("man", 2));
console.log(pluralize("sheep", 2));
console.log(pluralize("GHhdgd", 1));
