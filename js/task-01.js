const liItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${liItems.length}`);

liItems.forEach((item) => {
  console.log(
    `%c Category: ${item.firstElementChild.textContent}`,
    "color: red;  font-size: 16px"
  );
  console.log(
    `%cElements: ${item.lastElementChild.children.length}`,
    "color: green;  font-size: 16px"
  );
});
