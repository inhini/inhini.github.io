console.log("hello world!!!!");

function hello(name) {
    console.log("hello " + name);
}

hello("sir");

function annoyingGreet(name, numTimes) {
    let counter = 0;

    while (counter < numTimes) {
        hello(name);
        counter++;

    }
}
annoyingGreet("dude", 500);

function sumOfNumbers(num1, num2) {
    let result = num1 + num2;
    return result;
}
let answer = sumOfNumbers(1, 2);
console.log(answer);

function square(num1) {
    let result = num1 * num1;
    return result;
}
let answer2 = square(5);
console.log(answer2);

function sumOfSquares(num1, num2) {
    let result = sumOfNumbers(square(num1), square(num2));
    return result;
}
let answer3 = sumOfSquares(5, 6);
console.log(answer3);