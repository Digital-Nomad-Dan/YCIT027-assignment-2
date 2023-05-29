document.addEventListener("keydown", function (event) {
  let key = event.key.toLowerCase();

  let color;
  switch (key) {
    case "r":
      color = "red";
      break;
    case "y":
      color = "yellow";
      break;
    case "g":
      color = "green";
      break;
    case "b":
      color = "blue";
      break;
    default:
      return;
  }

  let divs = document.getElementsByTagName("div");

  for (let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = color;
  }
});
