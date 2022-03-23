const $box = document.getElementById("box");

const offset = { x: -25, y: -25 };

window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; 
  }

  if (event.key === "ArrowDown") {
    $box.style.backgroundColor = "red";
    $box.style.transform 
      = `translate3d(${offset.x}px, ${offset.y = offset.y + 5}px, 0)`;
  } else if (event.key === "ArrowUp") {
    $box.style.backgroundColor = "blue";
    $box.style.transform 
      = `translate3d(${offset.x}px, ${offset.y = offset.y - 5}px, 0)`;
  } else if (event.key === "ArrowLeft") {
    $box.style.backgroundColor = "green";
    $box.style.transform 
      = `translate3d(${offset.x = offset.x - 5}px, ${offset.y}px, 0)`;
  } else if (event.key === "ArrowRight") {
    $box.style.backgroundColor = "yellow";
    $box.style.transform 
      = `translate3d(${offset.x = offset.x + 5}px, ${offset.y}px, 0)`;
  } else {
    return;
  }

  event.preventDefault();
}, true);