const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

let counterValue = 0;

function handleIncrement() {
  counterValue += 1;
  value.textContent = counterValue;
}

function handleDecrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}
decrement.addEventListener("click", handleDecrement);
increment.addEventListener("click", handleIncrement);
