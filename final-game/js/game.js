alert("Stay as far away from obstacles as possible to keep your fish safe! Use W and S to move the fish up and down!");

let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");
let fish = document.getElementById("fish");
let rock = document.getElementById("rock");
let kelp = document.getElementById("kelp");
let coral = document.getElementById("coral");
let school = document.getElementById("fish-school");
let stalactite = document.getElementById("stalactite");
let clam = document.getElementById("clam");
let finish = document.getElementById("finish");

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
let rockXDirection = 2;
const ROCK_HEIGHT = 180;
const ROCK_WIDTH = 180;


//kelp
let kelpX = 450;
const KELP_Y = 210;
let kelpXDirection = 2;
const KELP_HEIGHT = 300;
const KELP_WIDTH = 150;

//coral
let coralX = 1300;
const CORAL_Y = 370;
let coralXDirection = 2;
const CORAL_HEIGHT = 130;
const CORAL_WIDTH = 130;

//fish school
let schoolX = 1550;
const SCHOOL_Y = 120;
let schoolXDirection = 2;
const SCHOOL_HEIGHT = 230;
const SCHOOL_WIDTH = 230;

//stalactite
let stalactiteX = 2100;
const STALACTITE_Y = 0;
let stalactiteXDirection = 2;
const STALACTITE_HEIGHT = 150;
const STALACTITE_WIDTH = 250;

//clam
let clamX = 2400;
const CLAM_Y = 300;
let clamXDirection = 2;
const CLAM_HEIGHT = 200;
const CLAM_WIDTH = 250;

//finish line
let finishX = 2850;
const FINISH_Y = 0;
let finishXDirection = 2;
const FINISH_HEIGHT = 500;
const FINISH_WIDTH = 100;

function drawFish() {
    ctx.beginPath();
    ctx.drawImage(fish, FISH_X, fishY, FISH_WIDTH, FISH_HEIGHT);
}

function moveFish() {
    fishY += (fishSpeed * fishYDirection);

    if (fishY < 0) {
        fishY = 0
    } else if (fishY > 500 - FISH_HEIGHT) {
        fishY = 500 - FISH_HEIGHT;
    }
}

function drawRock() {
    ctx.drawImage(rock, rockX, ROCK_Y, ROCK_WIDTH, ROCK_HEIGHT);
}

function checkRockCollide() {
    if (rockX + ROCK_WIDTH >= FISH_X &&
        rockX <= FISH_X + FISH_WIDTH &&
        ROCK_Y + ROCK_HEIGHT >= fishY &&
        ROCK_Y <= fishY + FISH_HEIGHT) {
        let answer = prompt("Game over! Would you like to play again? (Y/N)");
        if (answer === "N") {
            alert("Thanks for playing!");
            clearInterval(myInterval);
        } else if (answer === "Y") {
            alert("Stay as far away from obstacles as possible to keep your fish safe! Use W and S to move the fish up and down!");
            rockX = 1000;
            kelpX = 450;
            schoolX = 1550;
            clamX = 2400;
            coralX = 1300;
            stalactiteX = 2100;
            finishX = 2850;
            fishY = 250;
        }
    }
}

function moveRock() {
    rockX -= rockXDirection;
}

function drawKelp() {
    ctx.drawImage(kelp, kelpX, KELP_Y, KELP_WIDTH, KELP_HEIGHT);
}

function checkKelpCollide() {
    if (kelpX + KELP_WIDTH >= FISH_X &&
        kelpX <= FISH_X + FISH_WIDTH &&
        KELP_Y + KELP_HEIGHT >= fishY &&
        KELP_Y <= fishY + FISH_HEIGHT) {
        let answer = prompt("Game over! Would you like to play again? (Y/N)");
        if (answer === "N") {
            alert("Thanks for playing!");
            clearInterval(myInterval);
        } else if (answer === "Y") {
            alert("Stay as far away from obstacles as possible to keep your fish safe! Use W and S to move the fish up and down!");
            rockX = 1000;
            kelpX = 450;
            schoolX = 1550;
            clamX = 2400;
            coralX = 1300;
            stalactiteX = 2100;
            finishX = 2850;
            fishY = 250;
        }
    }
}

function moveKelp() {
    kelpX -= kelpXDirection;
}

function drawCoral() {
    ctx.drawImage(coral, coralX, CORAL_Y, CORAL_WIDTH, CORAL_HEIGHT);
}

function moveCoral() {
    coralX -= coralXDirection;
}

function checkCoralCollide() {
    if (coralX + CORAL_WIDTH >= FISH_X &&
        coralX <= FISH_X + FISH_WIDTH &&
        CORAL_Y + CORAL_HEIGHT >= fishY &&
        CORAL_Y <= fishY + FISH_HEIGHT) {
        let answer = prompt("Game over! Would you like to play again? (Y/N)");
        if (answer === "N") {
            alert("Thanks for playing!");
            clearInterval(myInterval);
        } else if (answer === "Y") {
            alert("Stay as far away from obstacles as possible to keep your fish safe! Use W and S to move the fish up and down!");
            rockX = 1000;
            kelpX = 450;
            schoolX = 1550;
            clamX = 2400;
            coralX = 1300;
            stalactiteX = 2100;
            finishX = 2850;
            fishY = 250;
        }
    }
}

function drawSchool() {
    ctx.drawImage(school, schoolX, SCHOOL_Y, SCHOOL_WIDTH, SCHOOL_HEIGHT);
}

function moveSchool() {
    schoolX -= schoolXDirection;
}

function checkSchoolCollide() {
    if (schoolX + SCHOOL_WIDTH >= FISH_X &&
        schoolX <= FISH_X + FISH_WIDTH &&
        SCHOOL_Y + SCHOOL_HEIGHT >= fishY &&
        SCHOOL_Y <= fishY + FISH_HEIGHT) {
        let answer = prompt("Game over! Would you like to play again? (Y/N)");
        if (answer === "N") {
            alert("Thanks for playing!");
            clearInterval(myInterval);
        } else if (answer === "Y") {
            alert("Stay as far away from obstacles as possible to keep your fish safe! Use W and S to move the fish up and down!");
            rockX = 1000;
            kelpX = 450;
            schoolX = 1550;
            clamX = 2400;
            coralX = 1300;
            stalactiteX = 2100;
            finishX = 2850;
            fishY = 250;
        }
    }
}

function drawStalactite() {
    ctx.drawImage(stalactite, stalactiteX, STALACTITE_Y, STALACTITE_WIDTH, STALACTITE_HEIGHT);
}

function moveStalactite() {
    stalactiteX -= stalactiteXDirection;
}

function checkStalactiteCollide() {
    if (stalactiteX + STALACTITE_WIDTH >= FISH_X &&
        stalactiteX <= FISH_X + FISH_WIDTH &&
        STALACTITE_Y + STALACTITE_HEIGHT >= fishY &&
        STALACTITE_Y <= fishY + FISH_HEIGHT) {
        let answer = prompt("Game over! Would you like to play again? (Y/N)");
        if (answer === "N") {
            alert("Thanks for playing!");
            clearInterval(myInterval);
        } else if (answer === "Y") {
            alert("Stay as far away from obstacles as possible to keep your fish safe! Use W and S to move the fish up and down!");
            rockX = 1000;
            kelpX = 450;
            schoolX = 1550;
            clamX = 2400;
            coralX = 1300;
            stalactiteX = 2100;
            finishX = 2850;
            fishY = 250;
        }
    }
}

function drawClam() {
    ctx.drawImage(clam, clamX, CLAM_Y, CLAM_WIDTH, CLAM_HEIGHT);
}

function moveClam() {
    clamX -= clamXDirection;
}

function checkClamCollide() {
    if (clamX + CLAM_WIDTH >= FISH_X &&
        clamX <= FISH_X + FISH_WIDTH &&
        CLAM_Y + CLAM_HEIGHT >= fishY &&
        CLAM_Y <= fishY + FISH_HEIGHT) {
        let answer = prompt("Game over! Would you like to play again? (Y/N)");
        if (answer === "N") {
            alert("Thanks for playing!");
            clearInterval(myInterval);
        } else if (answer === "Y") {
            alert("Stay as far away from obstacles as possible to keep your fish safe! Use W and S to move the fish up and down!");
            rockX = 1000;
            kelpX = 450;
            schoolX = 1550;
            clamX = 2400;
            coralX = 1300;
            stalactiteX = 2100;
            finishX = 2850;
            fishY = 250;
        }
    }
}

function drawFinish() {
    ctx.drawImage(finish, finishX, FINISH_Y, FINISH_WIDTH, FINISH_HEIGHT);
}

function moveFinish() {
    finishX -= finishXDirection;
}

function checkFinishCollide() {
    if (finishX + FINISH_WIDTH >= FISH_X &&
        finishX <= FISH_X + FISH_WIDTH &&
        FINISH_Y + FINISH_HEIGHT >= fishY &&
        FINISH_Y <= fishY + FISH_HEIGHT) {
        let answer = prompt("You finished! Would you like to play again? (Y/N)");
        if (answer === "N") {
            alert("Thanks for playing!");
            clearInterval(myInterval);
        } else if (answer === "Y") {
            alert("Stay as far away from obstacles as possible to keep your fish safe! Use W and S to move the fish up and down!");
            rockX = 1000;
            kelpX = 450;
            schoolX = 1550;
            clamX = 2400;
            coralX = 1300;
            stalactiteX = 2100;
            finishX = 2850;
            fishY = 250;
        }
    }
}

function refreshUI() {
    ctx.clearRect(0, 0, 700, 500);
    drawRock();
    drawFish();
    drawKelp();
    drawCoral();
    drawSchool();
    drawStalactite();
    drawClam();
    drawFinish();
    moveFish();
    moveRock();
    moveKelp();
    moveCoral();
    moveSchool();
    moveStalactite();
    moveClam();
    moveFinish();
    checkRockCollide();
    checkKelpCollide();
    checkCoralCollide();
    checkSchoolCollide();
    checkStalactiteCollide();
    checkRockCollide();
    checkFinishCollide();
}

function keyPressed(event) {
    let key = event.keyCode;

    if (key === 37) {
        playerXDirection = -1;
    } else if (key === 39) {
        playerXDirection = 1;
    } else if (key === 87) {
        fishYDirection = -1;
    } else if (key === 83) {
        fishYDirection = 1;
    }
}

function keyReleased(event) {
    let key = event.keyCode;

    if (key === 37) {
        playerXDirection = 0;
    } else if (key === 39) {
        playerXDirection = 0;
    } else if (key === 87) {
        fishYDirection = 0;
    } else if (key === 83) {
        fishYDirection = 0;
    }
}

var myInterval = setInterval(refreshUI, 10);