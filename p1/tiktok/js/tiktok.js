function magicAlgorithm(numLikes, comment, numComments, numShares, numViews) {
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

function popup() {
    alert("Welcome to Tiktok! Imagine I'm showing you a Tiktok video right now");
    let likeCount = prompt("How many likes did this Tiktok get?");
    let comment = prompt("What is the top comment?");
    let commentCount = prompt("How many comments are on this Tiktok?")
    let shareCount = prompt("How many shares did this video get?")


    let rankResult = magicAlgorithm(likeCount, commentCount, comment, shareCount);
    let resultString = ("Based off of the magic algorithm, this video's rank result is: " + rankResult)
}


function showUI() {
    let likeCount = document.getElementById("like-textbox").value;
    let commentCount = document.getElementById("comment-textbox").value;
    let comment = document.getElementById("topcomment-textbox").value;
    let shareCount = document.getElementById("share-textbox").value;


    let rankResult = magicAlgorithm(likeCount, commentCount, comment, shareCount);

    document.getElementById("result-paragraph").innerHTML = "Tiktok Rank: " + rankResult;
}