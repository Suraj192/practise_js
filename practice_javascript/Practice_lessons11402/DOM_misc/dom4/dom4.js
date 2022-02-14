"use strict";

/**
Complete the getUserIdFromCard function such that it returns the value of data-user-id (number)
from the user-card element.
**/

const getUserIdFromCard = () => {
  const user_card = document.querySelector("#user-card");
  return user_card.dataset.userId;
};

// Sample usage - do not modify
console.log(getUserIdFromCard());
