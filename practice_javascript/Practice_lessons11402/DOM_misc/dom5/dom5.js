const getIsActiveFromCard = () => {
  const form_card = document.querySelector("#user-card");
  if (form_card.dataset.isActive === "true") {
    return true;
  }
  return false;
};

// Sample usage - do not modify
console.log(getIsActiveFromCard());
