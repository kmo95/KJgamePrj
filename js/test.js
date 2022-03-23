const $main = document.getElementById('main');

window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; 
  }

  switch (event.key) {
  case "Down":
  case "ArrowDown":
    $main.textContent = 'down';
    break;
  case "Up": 
  case "ArrowUp":
    $main.textContent = 'up';
    break;
  case "Left": 
  case "ArrowLeft":
    $main.textContent = 'left';
    break;
  case "Right": 
  case "ArrowRight":
    $main.textContent = 'right';
    break;
  case "Enter":
    $main.textContent = 'enter';
    break;
  case "Esc": 
  case "Escape":
    $main.textContent = 'esc';
    break;
  default:
    return; 
  }

  event.preventDefault();
}, true);