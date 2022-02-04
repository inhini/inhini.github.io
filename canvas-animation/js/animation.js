// get canvas item
let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");

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
        xDirection = -1
        xDirection = 1;
    }
}

//setInterval(moveHorizontal, 10)
//setInterval(moveVertical, 10)
setInterval(bounceHorizontal, 10)