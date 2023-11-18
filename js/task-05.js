const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
inputEl.addEventListener("input", onClick);

function onClick(e) {
  outputEl.textContent = e.currentTarget.value;

  if (!outputEl.textContent) {
    outputEl.textContent = "Anonymous";
  }
}
