const prompt = require("prompt-sync")();

let getal = Number(prompt("Voer een getal in om vanaf af te tellen:"));

for (let i = getal; i >= 0; i--) {
    console.log(i);
}