let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");
let fish = document.getElementById("fish");
let rock = document.getElementById("rock");
let kelp = document.getElementById("kelp");

let keydownOutput = document.getElementById("keydown-output");
let keyupOutput = document.getElementById("keyup-output");

//fish
let fishY = 250;
const FISH_X = 100;
let fishYDirection = 0;
let fishSpeed = 3;
const FISH_WIDTH = 75;
const FISH_HEIGHT = 45;


//rock
let rockX = 1000;
const ROCK_Y = -10;
let rockXDirection = 1;
const ROCK_HEIGHT = 180;
const ROCK_WIDTH = 180;


//kelp
let kelpX = 450;
const KELP_Y = 210
let kelpXDirection = 0
const KELP_HEIGHT = 300
const KELP_WIDTH = 150



function drawFish() {
    ctx.beginPath()
    ctx.drawImage(fish, FISH_X, fishY, FISH_WIDTH, FISH_HEIGHT);
}

function moveFish() {
    fishY += (fishSpeed * fishYDirection)

    if (fishY < 0) {
        fishY = 0
    } else if (fishY > 500 - FISH_HEIGHT) {
        fishY = 500 - FISH_HEIGHT;
    }
}

function drawRock() {
    ctx.drawImage(rock, rockX, ROCK_Y, ROCK_WIDTH, ROCK_HEIGHT);
}

function checkFishCollide() {
    if (rockX + ROCK_WIDTH >= FISH_X &&
        rockX <= FISH_X + FISH_WIDTH &&
        ROCK_Y + ROCK_HEIGHT >= fishY &&
        ROCK_Y <= fishY + FISH_HEIGHT) {
        alert("Game over!");
    }
}

function moveRock() {
    rockX -= rockXDirection;
}


function drawKelp() {
    ctx.drawImage(kelp, kelpX, KELP_Y, KELP_WIDTH, KELP_HEIGHT);
}

function refreshUI() {
    ctx.clearRect(0, 0, 700, 500);
    drawRock()
    moveRock()
    drawFish()
        //drawKelp()
    moveFish()
    checkFishCollide();
}

function keyPressed(event) {
    let key = event.keyCode;

    if (key === 37) {
        playerXDirection = -1;
    } else if (key === 39) {
        playerXDirection = 1;
    } else if (key === 38) {
        fishYDirection = -1;
    } else if (key === 40) {
        fishYDirection = 1;
    }
}

function keyReleased(event) {
    let key = event.keyCode;

    if (key === 37) {
        playerXDirection = 0;
    } else if (key === 39) {
        playerXDirection = 0;
    } else if (key === 38) {
        fishYDirection = 0;
    } else if (key === 40) {
        fishYDirection = 0;
    }
}

setInterval(refreshUI, 10)