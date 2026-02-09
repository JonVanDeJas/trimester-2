const prompt = require("prompt-sync")();

let score1 = prompt("Geef de eerste score in: ");
let score2 = prompt("Geef de tweede score in: ");

if (score1 > 50 && score2 > 50) {
    console.log("Beide scores zijn goed");
} else if (score1 > 50 || score2 > 50) {
    console.log("Eén score is goed");
} else {
    console.log("Beide scores zijn slecht");
}
