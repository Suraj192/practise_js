const initGetWeather = () => {
  const button = document.querySelector("#my-button");

  button.addEventListener("click", () => {
    button.setAttribute("disabled", "disabled");
    button.textContent = "Loading...";
  });
};

// Sample usage - do not modify
initGetWeather();
