const $box = document.getElementById("box");

window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; 
  }

  switch (event.key) {
  case "Down":
  case "ArrowDown":
    $box.style.backgroundColor = "red";
    break;
  case "Up": 
  case "ArrowUp":
    $box.style.backgroundColor = "blue";
    break;
  case "Left": 
  case "ArrowLeft":
    $box.style.backgroundColor = "green";
    break;
  case "Right": 
  case "ArrowRight":
    $box.style.backgroundColor = "yellow";
    break;
  default:
    return; 
  }

  event.preventDefault();
}, true);