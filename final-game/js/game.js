let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");
let fish = document.getElementById("fish");
let rock = document.getElementById("rock");
let kelp = document.getElementById("kelp");

let keydownOutput = document.getElementById("keydown-output");
let keyupOutput = document.getElementById("keyup-output");

let fishY = 250;
const FISH_X = 100;
let fishYDirection = 0;
let playerSpeed = 3;
const FISH_WIDTH = 75;
const FISH_HEIGHT = 45;

let rockX = 200;
const ROCK_Y = -10;
let rockXDirection = 0;
const ROCK_HEIGHT = 180;
const ROCK_WIDTH = 180;

let kelpX = 450;
const KELP_Y = 210
let kelpXDirection = 0
const KELP_HEIGHT = 300
const KELP_WIDTH = 150

function drawFish() {
    ctx.beginPath()
    ctx.drawImage(fish, FISH_X, fishY, FISH_WIDTH, FISH_HEIGHT);
}

function drawRock() {
    ctx.drawImage(rock, rockX, ROCK_Y, ROCK_WIDTH, ROCK_HEIGHT);
}

function drawKelp() {
    ctx.drawImage(kelp, kelpX, KELP_Y, KELP_WIDTH, KELP_HEIGHT);
}

function refreshUI() {
    ctx.clearRect(0, 0, 700, 500);
    drawRock()
    drawFish()
    drawKelp()
}

setInterval(refreshUI, 10)