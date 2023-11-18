const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
const body = document.querySelector("body");

buttonEl.addEventListener("click", onHandleClick);

function onHandleClick() {
  body.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
