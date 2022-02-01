"use strict";

/**
Complete the function isPromoCodeValid such that it returns true when the promo code is valid 
and false otherwise.
/**
 * @param {boolean} code
 */

function isPromoCodeValid(code) {
  if (code.replaceAll(" ", "").length < 5) {
    return false;
  } else if (code.replaceAll(" ", "").length > 10) {
    return false; // trim for dealing with number of space ..
  } else {
    return true;
  }
}

// Sample usage - do not modify
const code = document.querySelector("#promo-code");

code.addEventListener("keyup", () => {
  let result = isPromoCodeValid(code.value);
  if (result) {
    code.classList.remove("error");
  } else {
    code.classList.add("error");
  }
});
