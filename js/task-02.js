const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const item = ingredients.map((ingredient) => {
  const li = document.createElement("li");

  li.textContent = ingredient;
  li.classList.add("item");

  return li;
});

list.append(...item);
console.log("ingredient :>> ", item);
