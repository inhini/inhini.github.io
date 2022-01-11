function magicAlgorithm(numLikes, comment) {
    let rank = 0;

    if (numLikes >= 10000 && comment.includes("dog")) {
        rank = 1;
    } else if (numLikes >= 500 && comment.includes("cat")) {
        rank = 100;
    } else {
        rank = 1000;
    }

    return rank;

}

alert("Welcome to Tiktok! Imagine I'm showing you a Tiktok video right now");
let likeCount = prompt("How many likes did this Tiktok get?");
let comment = prompt("What is the top comment?");

let rankResult = magicAlgorithm(likeCount, comment);
let resultString = ("Based off of the magic algorithm, this video's rank result is: " + rankResult)

alert(resultString);