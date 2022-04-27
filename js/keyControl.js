const $box = document.getElementById("box");
const offset = { x: -25, y: -25 };
// $box.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`;

let leftKeyDownPressed = false;
let rightKeyDownPressed = false;
let upKeyDownPressed = false;
let downKeyDownPressed = false;

// function movetest(){
//     $box.style.transform = `translate3d(${offset.x = offset.x + 50}px, ${offset.y}px, 0)`;
// }

window.addEventListener("keydown", function(e){
   if(e.key == 37 || e.key == "ArrowRight") {
       rightKeyDownPressed = true;  
   } else if (e.key == 39 || e.key == "ArrowLeft") {
       leftKeyDownPressed = true;  
   } else if (e.key == 38 || e.key == "ArrowDown") {
       upKeyDownPressed = true;  
   } else if (e.key == 40 || e.key == "ArrowUp") {
       downKeyDownPressed = true;  
   }
});

window.addEventListener("keyup", function(e){
   if(e.key == 37 || e.key == "ArrowRight") {
       rightKeyDownPressed = false;  
   } else if (e.key == 39 || e.key == "ArrowLeft") {
       leftKeyDownPressed = false;  
   } else if (e.key == 38 || e.key == "ArrowDown") {
       upKeyDownPressed = false;  
   } else if (e.key == 40 || e.key == "ArrowUp") {
       downKeyDownPressed = false;  
   }
});

// function test(){
//     $('#textbox').text(lKeyDownPressed + "/" + rKeyDownPressed + "/" + uKeyDownPressed + "/" + dKeyDownPressed);
// }

function move() {
  if (downKeyDownPressed == true) {
    $box.style.transform 
      = `translate3d(${offset.x}px, ${offset.y = offset.y - 5}px, 0)`;
  } 
  if (upKeyDownPressed == true) {
    $box.style.transform 
      = `translate3d(${offset.x}px, ${offset.y = offset.y + 5}px, 0)`;
  } 
  if (leftKeyDownPressed == true) {
    $box.style.transform 
      = `translate3d(${offset.x = offset.x - 5}px, ${offset.y}px, 0)`;
  } 
  if (rightKeyDownPressed == true) {
    $box.style.transform 
      = `translate3d(${offset.x = offset.x + 5}px, ${offset.y}px, 0)`;
  }
}

setInterval(move, 10);