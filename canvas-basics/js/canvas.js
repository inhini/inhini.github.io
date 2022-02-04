//console.log("test");

// let's do for loops
// count 1-10
for (let countOne = 1; countOne <= 10; countOne++) {
    console.log(countOne);
}

// count 10-1
for (let countTwo = 10; countTwo >= 1; countTwo--) {
    console.log(countTwo);
}

// count 1-10 odd numbers only
for (let countThree = 1; countThree < 11; countThree = countThree + 2) {
    console.log(countThree);
}

//get canvas element
let myCanvas = document.getElementById("my-canvas");
//create canvas object
let ctx = myCanvas.getContext("2d");

//draw rectangle
ctx.fillStyle = "CadetBlue"
ctx.fillRect(0, 0, 200, 100);

// draw lines
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 100);
ctx.lineTo(200, 0);
ctx.stroke();

//draw circle
ctx.beginPath();
ctx.arc(100, 50, 25, 0, 2 * Math.PI);
ctx.strokeStyle = "Red";
ctx.stroke();

//using for loop, draw a bullseye
for (let countThree = 5; countThree < 25; countThree = countThree + 5) {
    ctx.beginPath();
    ctx.arc(100, 50, countThree, 0, 2 * Math.PI);
    ctx.strokeStyle = "Red";
    ctx.stroke();
}