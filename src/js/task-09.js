function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorEl = document.querySelector(".color");
const changeColorButtonEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");

changeColorButtonEl.addEventListener("click", onChangeColor);

function onChangeColor() {
  const rendomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = rendomColor;
  colorEl.textContent = rendomColor;
}
