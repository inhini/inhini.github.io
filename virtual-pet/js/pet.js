let mood = 10;
let energy = 10;
let belly = 10;

function feedPet() {
    console.log("Feeding pet...");
    //belly = belly + 1;
    if (belly < 10) {
        belly += 1;
    }
    console.log("belly: " + belly);

    refreshUI();
}

function petPet() {
    console.log("Petting pet...");
    if (mood < 10) {
        mood += 1;
    }
    console.log("mood: " + mood);

    refreshUI();
}

function playPet() {
    console.log("Playing with pet...")
    if (energy < 10) {
        energy += 1;
    }
    console.log("energy: " + energy);

    refreshUI();
}



function decreaseValue() {
    if (belly > 0) {
        belly -= 1;
    }
    if (mood > 0) {
        mood -= 1;
    }
    if (energy > 0) {
        energy -= 1;
    }
    refreshUI();
}

function refreshUI() {
    let bellyMeter = document.getElementById("belly-meter");
    bellyMeter.value = belly;

    let bellyParagraph = document.getElementById("belly-paragraph");
    bellyParagraph.innerHTML = belly;

    let moodMeter = document.getElementById("mood-meter");
    moodMeter.value = mood;

    let moodParagraph = document.getElementById("mood-paragraph");
    moodParagraph.innerHTML = mood;

    let energyMeter = document.getElementById("energy-meter");
    energyMeter.value = energy;

    let energyParagraph = document.getElementById("energy-paragraph");
    energyParagraph.innerHTML = energy;


    let petImg = document.getElementById("pet-img");
    let petParagraph = document.getElementById("pet-condition");

    if (belly === 0) {
        petImg.src = "images/bartholomeowimages/starving.png";
        petParagraph.innerHTML = "You killed Bartholomeow!";
    } else if (belly >= 7 && mood >= 7 && energy >= 6) {
        petImg.src = "images/bartholomeowimages/full-happy-energetic.png";
        petParagraph.innerHTML = "Bartholomeow is content and energetic!";
    } else if (belly >= 7 && mood >= 7 && energy <= 5) {
        petImg.src = "images/bartholomeowimages/happy-full-restless.png";
        petParagraph.innerHTML = "Bartholomeow is content, but restless.";
    } else if (belly <= 6 && energy <= 4) {
        petImg.src = "images/bartholomeowimages/hungry-restless.png";
        petParagraph.innerHTML = "Bartholomeow is hungry and restless.";
    } else if (belly <= 5) {
        petImg.src = "images/bartholomeowimages/hungry-unloved-restless.png";
        petParagraph.innerHTML = "Bartholomeow is feeling very hungry.";
    } else if (mood <= 5 && energy <= 5) {
        petImg.src = "images/bartholomeowimages/unloved-hungry.png";
        petParagraph.innerHTML = "Bartholomeow feels unloved and unhappy.";
    } else if (mood <= 6 && energy <= 6 && belly <= 6) {
        petImg.src = "images/bartholomeowimages/hungry-restless.png"
        petParagraph.innerHTML = "Bartholomeow is hungry and restless."
    } else {
        petImg.src = "images/bartholomeowimages/perfectbartholomeow.png";
        petParagraph.innerHTML = "Bartholomeow is pretty content!";
    }
}

let petTimer = setInterval(decreaseValue, 3000);