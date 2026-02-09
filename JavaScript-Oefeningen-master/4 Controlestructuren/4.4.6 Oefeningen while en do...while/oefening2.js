const prompt = require("prompt-sync")();

let getal;

do {
    getal = Number(prompt("Voer een getal in tussen 1 en 10: "));
} while (isNaN(getal) || getal < 1 || getal > 10);

console.log("Je hebt een geldig getal ingevoerd: " + getal);
