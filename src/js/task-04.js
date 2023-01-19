let counterValue = 0;
const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const counterValueEl = document.querySelector("#value");

decrementEl.addEventListener("click", () => {
  counterValueEl.textContent = counterValue -= 1;
});

incrementEl.addEventListener("click", () => {
  counterValueEl.textContent = counterValue += 1;
});
