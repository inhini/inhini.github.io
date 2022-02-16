// get canvas item
let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");
let emoji = document.getElementById("emoji");

// get paragraph items
let keydownOutput = document.getElementById("keydown-output");
let keyupOutput = document.getElementById("keyup-output");

//player position and movement
let playerX = 250;
let playerY = 250;
let playerXDirection = 0
let playerYDirection = 0
let playerSpeed = 3;
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 20;

//image settings
const IMG_WIDTH = 40;
const IMG_HEIGHT = 40;

//ball position and movement
let ballX = 50;
let ballY = 200;
let ballXDirection = 2.5;
let ballYDirection = 2;
const BALL_RADIUS = 10;

function drawPlayer() {
    ctx.fillRect(playerX, playerY, 100, 20)
}

function movePlayer() {
    playerX += (playerSpeed * playerXDirection);
    playerY += (playerSpeed * playerYDirection);

    //edge check
    if (playerX < 0) {
        playerX = 0;
    } else if (playerX > 500 - PADDLE_WIDTH) {
        playerX = 500 - PADDLE_WIDTH;
    }
}

function drawBall() {
    ctx.beginPath()
    ctx.arc(ballX, ballY, BALL_RADIUS, 0, 2 * Math.PI);
    ctx.fill();
}

function drawImage() {
    ctx.drawImage(emoji, ballX, ballY, IMG_WIDTH, IMG_HEIGHT);
}

function moveBall() {
    ctx.beginPath()
    ballY += ballYDirection;
    ballX += ballXDirection;
}

function checkBallCollide() {
    // check vertical wall
    if ((ballY > 500 - IMG_WIDTH) || (ballY < 0)) {
        ballYDirection = ballYDirection * -1;
    }

    if ((ballX > 500 - IMG_HEIGHT) || (ballX < 0)) {
        ballXDirection = ballXDirection * -1;
    }

    //check to see if i hit the paddle
    if (ballX + IMG_HEIGHT >= playerX &&
        ballX - BALL_RADIUS <= playerX + PADDLE_WIDTH &&
        ballY + IMG_HEIGHT >= playerY &&
        ballY - BALL_RADIUS <= playerY + PADDLE_HEIGHT) {
        ballYDirection = ballYDirection * -1.01;
        //ballYDirection *=1
        //ballYDirection = -ballYDirection
    }
}

function refreshUI() {
    ctx.clearRect(0, 0, 500, 500);
    movePlayer();
    drawPlayer();
    //animate ball
    checkBallCollide();
    moveBall();
    //drawBall();
    drawImage();
}

//when key is pressed
function keyPressed(event) {
    //get the actual key pressed
    let key = event.keyCode;
    keydownOutput.innerHTML = "Key down code: " + key;

    //move player
    if (key === 37) {
        playerXDirection = -1;
    } else if (key === 39) {
        playerXDirection = 1;
    } else if (key === 38) {
        playerYDirection = -1;
    } else if (key === 40) {
        playerYDirection = 1;
    }
}

//when key is released
function keyReleased(event) {
    let key = event.keyCode;
    keyupOutput.innerHTML = "Key up code: " + key;

    if (key === 37) {
        playerXDirection = 0;
    } else if (key === 39) {
        playerXDirection = 0;
    } else if (key === 38) {
        playerYDirection = 0;
    } else if (key === 40) {
        playerYDirection = 0;
    }
}

//object position
let xPosition = 0;

function moveHorizontal() {
    //clear screen
    ctx.clearRect(0, 0, 500, 500);
    //draw rect at current position
    ctx.fillRect(xPosition, 0, 20, 20);
    //move xposition over by x pixels
    xPosition += 1;
    //did I hit the wall? if so, wrap around
    if (xPosition >= 500) {
        xPosition = 0;
    }
}

let yPosition = 0;

function moveVertical() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillRect(0, yPosition, 20, 20);
    yPosition += 1;
    if (yPosition >= 500) {
        yPosition = 0;
    }
}

let xDirection = 1;

function bounceHorizontal() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillRect(xPosition, 0, 20, 20);
    xPosition += xDirection;
    if (xPosition >= 500) {
        xDirection = -1;
    } else if (xPosition <= 0) {
        xDirection = -1;
        xDirection = 1;
    }
}

//setInterval(moveHorizontal, 10)
//setInterval(moveVertical, 10)
//setInterval(bounceHorizontal, 10)
setInterval(refreshUI, 10)