const getFullName = () => {
  const fn = document.querySelector("#first-name").value;
  const ln = document.querySelector("#last-name").value;
  return (document.querySelector("#full-name").value = `${fn} ${ln}`);
};

// Sample usage - do not modify
const fullName = document.querySelector("#full-name");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");

const updateFullName = () => {
  fullName.textContent = getFullName();
};
firstName.addEventListener("keyup", () => updateFullName());
lastName.addEventListener("keyup", () => updateFullName());
