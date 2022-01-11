function magicAlgorithm(numLikes, comment, numComments, numShares) {
    let rank = 0;

    if (numLikes >= 10000 && comment.includes("dog") && numComments >= 1000 && numShares >= 300) {
        rank = 1;
    } else if (numLikes >= 500 && comment.includes("cat") && numComments >= 400 && numShares >= 100) {
        rank = 100;
    } else {
        rank = 1000;
    }

    return rank;

}

alert("Welcome to Tiktok! Imagine I'm showing you a Tiktok video right now");
let likeCount = prompt("How many likes did this Tiktok get?");
let comment = prompt("What is the top comment?");
let commentCount = prompt("How many comments are on this Tiktok?")
let shareCount = prompt("How many shares did this video get?")

let rankResult = magicAlgorithm(likeCount, comment, commentCount, shareCount);
let resultString = ("Based off of the magic algorithm, this video's rank result is: " + rankResult)

alert(resultString);