// practice code for while loops
// 1. using while loop count from 0 to 10
/*
let number = 0;
while (number <= 10) {
    console.log(number);
    number = number + 1
        //number++;
}
// 2. using a while loop count from 10 to 0
let numbers = 10;
while (numbers >= 0) {
    console.log(numbers);
    numbers = numbers - 1
}
// 3. extra challenge - count from 0 to 50, but only odd numbers
let numbered = 1;
while (numbered <= 50) {
    console.log(numbered);
    numbered = numbered + 2
}
*/


let continueGame = "y";

while (continueGame === "y") {
    let welcomeMsg = "You've almost finished an escape room. All your effort has come to one key, and before you is a locked door and a locked box.";
    alert(welcomeMsg);

    //ask which to open
    let playerChoice = prompt(" Which do you choose to open first? For box, enter '1', and for door, enter '2'.");

    let mistAgree = Math.floor(Math.random() * 2) + 1;
    //outcomes for answers
    if (playerChoice === "2") {
        alert('You made it out in time! The cashier congratulates you and hands you a little pin that says "I escaped!". You forget about the box and go on with your day.');
    } else if (playerChoice === "1") {
        let choiceTwo = Number(prompt("You open the box. A mist spreads into the room. It asks you: Do you like pineapple on pizza? Enter '1' for yes, and '2' for no."));
        if (choiceTwo === mistAgree) {
            alert("The mist disagrees with you. You are vaporized in an instant.");
        } else {
            alert("The mist agrees. It clears, and you find a giant pile of cash in front of you. You never have to work a day in your life again.");
        }
    } else {
        alert("Please enter either '1' to open the box, or '2' to open the door.");
    }

    continueGame = prompt("Would you like to play again (y/n)?");

}