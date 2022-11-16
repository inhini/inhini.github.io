function login() {

    let greetParagraph = document.getElementById("greet");

    user = document.getElementById("user").value;

    greetParagraph.innerHTML = "Welcome, " + user + "!";

    let loginForm = document.getElementById("form");

    loginForm.style.display = "none";
}

function donate1() {

    let fiveSelected = document.getElementById("5").checked
    let tenSelected = document.getElementById("10").checked
    let twentyfiveSelected = document.getElementById("25").checked
    let fiftySelected = document.getElementById("50").checked
    let hundredSelected = document.getElementById("100").checked

    if (fiveSelected) {
        alert("Thank you for donating $5 to support PetPartners!")
    } else if (tenSelected) {
        alert("Thank you for donating $10 to support PetPartners!")
    } else if (twentyfiveSelected) {
        alert("Thank you for donating $25 to support PetPartners!")
    } else if (fiftySelected) {
        alert("Thank you for donating $50 to support PetPartners!")
    } else if (hundredSelected) {
        alert("Thank you for donating $100 to support PetPartners!")
    }
}

function donate2() {

    let mfiveSelected = document.getElementById("5m").checked
    let mtenSelected = document.getElementById("10m").checked
    let mtwentyfiveSelected = document.getElementById("25m").checked
    let mfiftySelected = document.getElementById("50m").checked
    let mhundredSelected = document.getElementById("100m").checked

    if (mfiveSelected) {
        alert("Thank you for your monthly donation of $5!")
    } else if (mtenSelected) {
        alert("Thank you for your monthly donation of $10!")
    } else if (mtwentyfiveSelected) {
        alert("Thank you for your monthly donation of $25!")
    } else if (mfiftySelected) {
        alert("Thank you for your monthly donation of $50!")
    } else if (mhundredSelected) {
        alert("Thank you for your monthly donation of $100!")
    }

}