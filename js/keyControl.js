const $box = document.getElementById("box");
const offset = { x: -250, y: -250 };
$box.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`;

let lKeyDownPressed = false;
let rKeyDownPressed = false;
let uKeyDownPressed = false;
let dKeyDownPressed = false;

function movetest(){
    $box.style.transform = `translate3d(${offset.x = offset.x + 50}px, ${offset.y}px, 0)`;
}

$(document).keydown(function(e){
   if(e.key == 37 || e.key == "ArrowRight") {
       rKeyDownPressed = true;  
   } else if (e.key == 39 || e.key == "ArrowLeft") {
       lKeyDownPressed = true;  
   } else if (e.key == 38 || e.key == "ArrowDown") {
       uKeyDownPressed = true;  
   } else if (e.key == 40 || e.key == "ArrowUp") {
       dKeyDownPressed = true;  
   }
});

$(document).keyup(function(e){
   if(e.key == 37 || e.key == "ArrowRight") {
       rKeyDownPressed = false;  
   } else if (e.key == 39 || e.key == "ArrowLeft") {
       lKeyDownPressed = false;  
   } else if (e.key == 38 || e.key == "ArrowDown") {
       uKeyDownPressed = false;  
   } else if (e.key == 40 || e.key == "ArrowUp") {
       dKeyDownPressed = false;  
   }
});

function test(){
    $('#textbox').text(lKeyDownPressed + "/" + rKeyDownPressed + "/" + uKeyDownPressed + "/" + dKeyDownPressed);
}

setInterval(move, 10);

function move() {
  if (dKeyDownPressed == true) {
    //$box.style.backgroundColor = "red";
    $box.style.transform 
      = `translate3d(${offset.x}px, ${offset.y = offset.y - 5}px, 0)`;
  } 
  if (uKeyDownPressed == true) {
    //$box.style.backgroundColor = "blue";
    $box.style.transform 
      = `translate3d(${offset.x}px, ${offset.y = offset.y + 5}px, 0)`;
  } 
  if (lKeyDownPressed == true) {
    //$box.style.backgroundColor = "green";
    $box.style.transform 
      = `translate3d(${offset.x = offset.x - 5}px, ${offset.y}px, 0)`;
  } 
  if (rKeyDownPressed == true) {
    //$box.style.backgroundColor = "yellow";
    $box.style.transform 
      = `translate3d(${offset.x = offset.x + 5}px, ${offset.y}px, 0)`;
  }
}

