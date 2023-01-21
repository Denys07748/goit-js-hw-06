const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onValidationInput);

function onValidationInput(event) {
  inputEl.classList.remove("valid", "invalid");
  if (+inputEl.dataset.length === event.currentTarget.value.length)
    inputEl.classList.add("valid");
  else inputEl.classList.add("invalid");
}
