const inputSizeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputSizeEl.addEventListener(
  "input",
  (e) => (textEl.style.fontSize = `${e.currentTarget.value}px`)
);
