const nameInput = document.querySelector("#name-input");
let nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  const currentTargetTrim = event.currentTarget.value.trim();
  if (currentTargetTrim === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = currentTargetTrim;
  }
});
