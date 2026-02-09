const prompt = require("prompt-sync")();

let getal = Number(prompt("Voer een getal in om vanaf af te tellen:"));

while (getal >= 0) {
    console.log(getal);
    getal--;
}
