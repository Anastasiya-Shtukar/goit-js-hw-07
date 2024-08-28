function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let input = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const controls = document.querySelector("#controls");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
buttonCreate.addEventListener("click", () => {
  input.addEventListener("input", (event) => {
    const currentTargetTrim = event.currentTarget.value.trim();
    (currentTargetTrim > 1) & (currentTargetTrim < 100);

    const boxesCreate = document.createElement("div");
    boxesCreate.style.width = "30px";
    boxesCreate.style.height = "30px";
    boxesCreate.style.backgroundColor = getRandomHexColor();
    for (let index = 0; index < currentTargetTrim; index++) {
      boxes.append(boxesCreate);
    }
    return;
  });
});
