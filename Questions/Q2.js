// This code is part of a simple number guessing game in JavaScript.
// The user is prompted to guess a number between 1 and 50, and the game

let gameNum = 25;

let userNum = prompt("Guese a game number between 1 to 50");

while(userNum != gameNum){
    userNum = prompt("wrong guess, try again")
}

console.log("congrats! You guessed the right number:");