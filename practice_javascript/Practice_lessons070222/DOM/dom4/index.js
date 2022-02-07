/**
 * @param {string} cssSelector
 */
const getTextFromSelector = (cssSelector) => {
  const text = document.querySelector(cssSelector);
  return text?.textContent ?? "";
};

// Sample usage - do not modify
console.log(getTextFromSelector("h1")); // "First human lands on Mars!"
console.log(getTextFromSelector("h2")); // undefined
