const canvas = document.getElementById("field");
const ctx = canvas.getContext("2d");
const ballRadius = 10;
// let ballX = canvas.width * Math.random();
// let ballY = canvas.height * Math.random();
// let dx = 2;
// let dy = -2;
const boxHeight = 25;
const boxWidth = 25;
let boxX = (canvas.width - boxWidth) / 2;
let boxY = (canvas.height - boxHeight) / 2; 
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let lifePoint = 3;

let ballCount = 5;
let balls = [];

for (let i = 0; i < ballCount; i++) {
    balls[i] = { 
        x: canvas.width * Math.random(), 
        y: canvas.height * Math.random(),
        dx: 2,
        dy: -2, 
        status: 1 
    };
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
            ctx.beginPath();
            ctx.arc(balls[i].x, balls[i].y, ballRadius, 0, Math.PI * 2);
            ctx.fillStyle = "#FF0000";
            ctx.fill();
            ctx.closePath();

            // 좌우로 튕기기
            if (balls[i].x + balls[i].dx > canvas.width - ballRadius || balls[i].x + balls[i].dx < ballRadius) {
                balls[i].dx = -balls[i].dx;
            }

            // 위 아래 방향으로 튕기기
            if (balls[i].y + balls[i].dy > canvas.height - ballRadius || balls[i].y + balls[i].dy < ballRadius) {
                balls[i].dy = -balls[i].dy;
            }

            balls[i].x += balls[i].dx;
            balls[i].y += balls[i].dy;
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
        let ball = balls[i];
        if (ball.status === 1) {
            if (ball.x > boxX && ball.x < boxX + boxWidth && ball.y > boxY && ball.y < boxY + boxHeight) {
                lifePoint--;
                ball.status = 0;
            }
        }
    }
}

function drawLifePoint() {
    ctx.font = "16px";
    ctx.fillStyle = "#000000";
    ctx.fillText("Life Point: " + lifePoint, 8, 20);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBox();
    drawBall();
    drawLifePoint();
    collisionDetection();
    
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

    if (lifePoint === 0) {
        let result = confirm("Game Over!\nRestart?");
        if (result) {
            setTimeout(() => document.location.reload(), 10);
        }
        else {
            setTimeout(() => document.location.href = "../end.html", 10);
        }
    }
}

setInterval(draw, 10);