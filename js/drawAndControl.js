const canvas = document.getElementById("field");
const ctx = canvas.getContext("2d");
const ballRadius = 10;
let x = canvas.width / (2 + Math.random() * 8);
let y = canvas.height - (30 + Math.random() * 10);
let dx = 2;
let dy = -2;
const boxHeight = 25;
const boxWidth = 25;
let boxX = (canvas.width - boxWidth) / 2;
let boxY = (canvas.height - boxHeight) / 2; 
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let createPressed = false;
let collisionNumber = 0;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.keyCode == 39 || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if (e.keyCode == 37 || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    else if (e.key == 38 || e.key == "ArrowDown") {
        upPressed = true;  
    } 
    else if (e.key == 40 || e.key == "ArrowUp") {
        downPressed = true;  
    }
    else if (e.keyCode == 13 || e.key == "Enter") { // 공 생성키
        createPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39 || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if (e.keyCode == 37 || e.key == "ArrowLeft") {
        leftPressed = false;
    }
    else if (e.key == 38 || e.key == "ArrowDown") {
        upPressed = false;  
    } 
    else if (e.key == 40 || e.key == "ArrowUp") {
        downPressed = false;  
    }
}

function drawBall() {
    if (createPressed) {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = "#FF0000";
        ctx.fill();
        ctx.closePath();
    }
}

function drawBox() {
    ctx.beginPath();
    ctx.rect(boxX, boxY, boxWidth, boxHeight);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
}

function drawCollisionNumber() {
    ctx.font = "16px";
    ctx.fillStyle = "#000000";
    ctx.fillText("충돌 횟수: " + collisionNumber, 8, 20);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBox();
    drawCollisionNumber();
    
    // 좌우로 튕기기
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    // 위 아래 방향으로 튕기기
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    // 박스와 공 충돌
    if (x > boxX && x < boxX + boxWidth && y > boxY && y < boxY + boxHeight) {
        console.log("충돌");
        collisionNumber++;
    }

    // 박스 움직이기
    if (rightPressed && boxX < canvas.width - boxWidth) {
        boxX += 5;
    }
    else if (leftPressed && boxX > 0) {
        boxX -= 5;
    }

    if (upPressed && boxY < canvas.height - boxHeight) {
        boxY += 5;
    }
    else if (downPressed && boxY > 0) {
        boxY -= 5;
    }
    
    x += dx;
    y += dy;
}

setInterval(draw, 10);
setInterval(drawBall, 10);