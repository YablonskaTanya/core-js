const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", onInputSizeControl);

function onInputSizeControl(e) {
  text.style.fontSize = e.currentTarget.value + "px";
}
