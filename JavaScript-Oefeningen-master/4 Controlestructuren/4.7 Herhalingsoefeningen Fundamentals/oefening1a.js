const prompt = require("prompt-sync")();

let aantalLijnen = prompt("Hoeveel lijnen wil je afdrukken? ");
let lijn = "";
for (let i = 1; i <= aantalLijnen; i++) {
    lijn += "#";
    console.log(lijn);
}

/*
nog een mogelijke manier om tewerk te gaan: 

for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
*/