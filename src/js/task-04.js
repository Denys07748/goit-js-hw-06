let counterValue = 0;
const actionsEl = document.querySelectorAll("#counter button");
const counterValueEl = document.querySelector("#value");

actionsEl[0].addEventListener("click", () => {
  counterValueEl.textContent = counterValue -= 1;
});

actionsEl[1].addEventListener("click", () => {
  counterValueEl.textContent = counterValue += 1;
});
