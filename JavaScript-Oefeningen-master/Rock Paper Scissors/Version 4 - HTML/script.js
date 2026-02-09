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
updateJsScore();


/* -----------------BUTTON FUNCTIONS----------------- */

function play(move) {
    const npcMove = pickComputerMove();
    updateJsMovesChosen(move, npcMove);
    const result = decideWinner(move, npcMove);
    updateJsResult(result);
    updateObject(result);
    updateJsScore();
    saveScore();
}

function reset() {
    score.wins = 0;
    score.losses = 0;
    score.draws = 0;
    updateJsScore();
    saveScore();
}


/* -----------------HELP FUNCTIONS----------------- */

function saveScore() {
    let scoreJson = JSON.stringify(score);
    localStorage.setItem("score", scoreJson);
}

function updateJsScore() {
    let scoreParagraph = document.querySelector('.js-score');
    scoreParagraph.innerHTML = 
        `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.draws}`;
}

// Update de <p> met class js-moves-chosen
function updateJsMovesChosen(move, npcMove) {
    let movesParagraph = document.querySelector('.js-moves-chosen');
    movesParagraph.innerHTML = `You ${move} - ${npcMove} Computer`;
}

// Update de <p> met class js-result
function updateJsResult(result) {
    let resultParagraph = document.querySelector('.js-result');
    if (result == 'draw') {
        resultParagraph.innerHTML = `Tie!`;
    } else {
        resultParagraph.innerHTML = `You ${result}!`;
    }
}

// Neemt het resultaat als argument en update het score-object
function updateObject(result) {
    switch (result) {
        case "win": 
            score.wins++;
            break;
        case "lose":
            score.losses++;
            break;
        case "draw":
            score.draws++;
            break;
        default:
            break;
    }
}

// Neemt 2 moves als argumenten returnt 'win', 'lose' of 'draw'
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

// Kiest een willekeurige move ('rock', 'paper' of 'scissors')
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