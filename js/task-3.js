const nameInput = document.querySelector("#name-input");
let nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  if (event.currentTarget.value === "" || event.currentTarget.value === " ") {
    nameInput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = event.currentTarget.value;
  }
});
