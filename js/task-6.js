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
  boxes.innerHTML = "";
  if (input.value > 1 && input.value < 100) {
    for (let index = 1; index <= input.value; index++) {
      const boxesCreate = document.createElement("div");
      boxes.append(boxesCreate);
      let x = 20;
      let sizeBox = x + 10;

      boxesCreate.style.width = `${sizeBox}px`;
      boxesCreate.style.height = `${sizeBox}px`;
      boxesCreate.style.backgroundColor = getRandomHexColor();
    }
  }
  return (input.value = "");
});
buttonDestroy.addEventListener("click", () => {
  return (boxes.innerHTML = "");
});
