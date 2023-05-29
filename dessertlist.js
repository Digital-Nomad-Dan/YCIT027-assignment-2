let dessertsList = document.getElementById("desserts");
let addButton = document.getElementById("addButton");

addButton.addEventListener("click", function () {
  let dessertName = prompt("Enter the dessert name:");

  let listItem = document.createElement("li");
  let dessertText = document.createTextNode(dessertName);
  listItem.appendChild(dessertText);

  listItem.addEventListener("click", function () {
    let newName = prompt("Enter the new dessert name:");
    this.textContent = newName;
  });

  dessertsList.appendChild(listItem);
});

document.addEventListener("keydown", function (event) {
  let char = event.key;
  console.log("Pressed key:", char);
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("Page fully loaded");
});
