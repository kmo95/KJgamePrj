const canvas = document.getElementById("field");
const ctx = canvas.getContext("2d");
const ballRadius = 10;
const boxHeight = 25;
const boxWidth = 25;
let boxX = (canvas.width - boxWidth) / 2;
let boxY = (canvas.height - boxHeight) / 2; 
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let lifePoint = 3;
let boxSpeed = 4;
let ballCount = 4;
let balls = [];

function generateBall() {
    for (let i = 0; i < ballCount; i++) {
        balls[i] = { 
            x: canvas.width * Math.random(), 
            y: canvas.height * Math.random(),
            dx: 2,
            dy: -2, 
            status: "activate" 
        };
    }
}

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
        if (balls[i].status === "activate") {
            ctx.beginPath();
            ctx.arc(balls[i].x, balls[i].y, ballRadius, 0, Math.PI * 2);
            ctx.fillStyle = "#FF0000";
            ctx.fill();
            ctx.closePath();

            if (balls[i].x + balls[i].dx > canvas.width - ballRadius || balls[i].x + balls[i].dx < ballRadius) {
                balls[i].dx = -balls[i].dx;
            }
        
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
        if (ball.status === "activate") {
            if (ball.x > boxX && ball.x < boxX + boxWidth && ball.y > boxY && ball.y < boxY + boxHeight) {
                lifePoint--;
                ball.status = "deactivate";
            }
        }
    }
}

function drawLifePoint() {
    ctx.font = "16px";
    ctx.fillStyle = "#000000";
    ctx.fillText("Life Point: " + lifePoint, 8, 20);
}

function moveBox() {
    if (rightPressed && boxX < canvas.width - boxWidth) {
        boxX += boxSpeed;
    }
    else if (leftPressed && boxX > 0) {
        boxX -= boxSpeed;
    }

    if (upPressed && boxY < canvas.height - boxHeight) {
        boxY += boxSpeed;
    }
    else if (downPressed && boxY > 0) {
        boxY -= boxSpeed;
    }
}

function gameOver() {
    if (lifePoint === 0) {
        let result = confirm("Game Over!\nRestart?");
        if (result) {
            document.location.reload();
            clearInterval(interval);
        }
        else {
            document.location.href = "../end.html";
            clearInterval(interval);
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBox();
    drawBall();
    drawLifePoint();
    collisionDetection();
    moveBox();
    gameOver();
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

generateBall();
let interval = setInterval(draw, 10);