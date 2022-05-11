const canvas = document.getElementById("field");
const ctx = canvas.getContext("2d");
const ballRadius = 10;
let bx = canvas.width * Math.random();
let by = canvas.height * Math.random();
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
// let createPressed = false;
let collisionNumber = 0;


let ballCount = 10;
let balls = [];

for (let i = 0; i < ballCount; i++) {
    balls[i] = { x: 0, y: 0, status: 1 };
}

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
    // else if (e.keyCode == 13 || e.key == "Enter") { // 공 생성키
    //     createPressed = true;
    // }
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
    for (let i = 0; i < ballCount; i++) {
        if (balls[i].status === 1) {
            balls[i].x = bx;
            balls[i].y = by;
            ctx.beginPath();
            ctx.arc(bx, by, ballRadius, 0, Math.PI * 2);
            ctx.fillStyle = "#FF0000";
            ctx.fill();
            ctx.closePath();
        }
    }
}

function drawBox() {
    ctx.beginPath();
    ctx.rect(boxX, boxY, boxWidth, boxHeight);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
}

function collisionDetection() {
    for (let i = 0; i < ballCount; i++) {
        let b = balls[i];
        if (b.status === 1) {
            if (b.x > boxX && b.x < boxX + boxWidth && b.y > boxY && b.y < boxY + boxHeight) {
                console.log("충돌");
                collisionNumber++;
                b.status = 0;
            }
        }
    }
}

function drawCollisionNumber() {
    ctx.font = "16px";
    ctx.fillStyle = "#000000";
    ctx.fillText("충돌 횟수: " + collisionNumber, 8, 20);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBox();
    drawBall();
    drawCollisionNumber();
    collisionDetection();
    
    // 좌우로 튕기기
    if (bx + dx > canvas.width - ballRadius || bx + dx < ballRadius) {
        dx = -dx;
    }
    // 위 아래 방향으로 튕기기
    if (by + dy > canvas.height - ballRadius || by + dy < ballRadius) {
        dy = -dy;
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
    
    bx += dx;
    by += dy;
}

setInterval(draw, 10);