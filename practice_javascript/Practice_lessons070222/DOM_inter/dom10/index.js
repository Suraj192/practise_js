const getSelectedCurrencies = () => {
  let currencies = document.querySelectorAll(".cards .card.active");
  //currencys = [];
  //currencies.forEach((currency) => currencys.push(currency.textContent));
  return [...currencies].map((currency) => currency.textContent);
};

// Sample usage - do not modify
document.querySelectorAll(".cards .card").forEach((card) => {
  card.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active");
    console.log(getSelectedCurrencies());
  });
});
