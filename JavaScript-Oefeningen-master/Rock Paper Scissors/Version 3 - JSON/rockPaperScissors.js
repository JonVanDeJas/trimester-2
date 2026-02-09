const prompt = require("prompt-sync")();

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

/* SCORE OBJECT */
let score = {
	wins: 0,
    losses: 0,
    draws: 0
};

let scoreJson = localStorage.getItem("score");
if (scoreJson) {
    score = JSON.parse(scoreJson);
}

/* -----------------MAIN CODE----------------- */

/* CHOOSE MOVES */

let userMove = prompt("rock, paper or scissors?: ");
while (!(userMove === 'rock' || userMove === 'paper' || userMove === 'scissors')) {
    userMove = prompt("Please type 'rock', 'paper' or 'scissors': ");
} 

let computerMove = pickComputerMove();

let result = decideWinner(userMove, computerMove);

/* UPDATE OBJECTS */

console.log(`You: ${userMove} - Computer: ${computerMove}`);

if (result === 'win') {
    console.log("You win!");
    score.wins++;
} else if (result === "lose") {
    console.log("You lose!");
    score.losses++;
} else {
    console.log("It's a draw!");
    score.draws++;
}

/* JSON STRINGIFY + SAVE TO LOCALSTORAGE */
scoreJson = JSON.stringify(score);
localStorage.setItem("score", scoreJson);

/* LOG RESULTS */
console.log(`Wins: ${score.wins} - Losses: ${score.losses} - Draws: ${score.draws}`);

/* -----------------FUNCTIONS----------------- */

function decideWinner(userMove, computerMove) {
    let result;
    switch (userMove) {
        case 'rock':
            if (computerMove === 'rock') {
                result = 'draw';
            } else if (computerMove === 'paper') {
                result = 'lose';
            } else {
                result = 'win';
            }
            break;
        case 'paper':
            if (computerMove === 'rock') {
                result = 'win';
            } else if (computerMove === 'paper') {
                result = 'draw';
            } else {
                result = 'lose';
            }
            break;
        case 'scissors':
            if (computerMove === 'rock') {
                result = 'lose';
            } else if (computerMove === 'paper') {
                result = 'win';
            } else {
                result = 'draw';
            }
            break;
    }
    return result;
}

function pickComputerMove() {
    const rand = Math.random();
    let computerMove = '';

    if (rand >= 0 && rand < 1/3) {
        computerMove = 'rock';
    } else if (rand < 2/3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    return computerMove;
}