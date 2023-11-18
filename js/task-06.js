const input = document.querySelector("#validation-input");
console.log("input :>> ", input);

input.addEventListener("blur", onBlur);

function onBlur(e) {
  const inputValue = e.currentTarget.value;
  if (inputValue.length === Number(input.dataset.length)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
