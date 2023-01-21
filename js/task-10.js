function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("#controls input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", onCreateElements);
refs.destroyBtn.addEventListener("click", onDestroyElements);

function onCreateElements() {
  const elements = [];
  const amount = refs.input.value;
  let width = 30;
  let height = 30;

  for (let index = 0; index < amount; index++) {
    const element = document.createElement("div");
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
    element.style.backgroundColor = getRandomHexColor();

    elements.push(element);
    width += 10;
    height += 10;
  }

  refs.boxes.append(...elements);
}

function onDestroyElements() {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
}
