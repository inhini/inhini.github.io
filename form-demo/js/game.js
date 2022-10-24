let fname = "";


// this is function for the greet
function greet() {
    // grab the greet paragraph
    let greetParagraph = document.getElementById("greet");

    //get values from the form
    fname = document.getElementById("fname").value;
    let age = document.getElementById("age").value;

    //show the result 
    greetParagraph.innerHTML = "Greetings, " + age + " year old " + fname + "!";
}

//function to trivia game
function trivia() {
    //trivia answer
    let triviaAnswer = document.getElementById("trivia-answer");
    //get the checked values from form
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    //decide what to "print"
    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. You could try though?";
    } else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Though I suppose it tastes better with a little.. extra flavor"
    } else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", you are correct?"
    }
}

//function to trivia game
function lies() {
    //trivia answer
    let lieAnswer = document.getElementById("lie-answer");
    //get the checked values from form
    let truth1Selected = document.getElementById("truth1").checked;
    let truth2Selected = document.getElementById("truth2").checked;
    let lieSelected = document.getElementById("lie").checked;

    //decide what to "print"
    if (truth1Selected) {
        lieAnswer.innerHTML = fname + ", nope, I did have a pet rabbit when I was younger.";
    } else if (truth2Selected) {
        lieAnswer.innerHTML = fname + ", nope, it's 100% true that Shang in Mulan 2 is a..... jerk, to say the least."
    } else if (lieSelected) {
        lieAnswer.innerHTML = fname + ", yep, I've broken my shoulder before."
    }
}