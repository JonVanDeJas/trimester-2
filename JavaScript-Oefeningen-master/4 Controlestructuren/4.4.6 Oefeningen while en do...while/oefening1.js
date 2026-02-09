const prompt = require("prompt-sync")();


let getal = Number(prompt("Voer een getal in (voer een negatief getal in om te stoppen): "));
let som = 0;

while (getal >= 0) {
    som += getal;
    getal = parseInt(prompt("Voer een getal in (voer een negatief getal in om te stoppen): "));
}

console.log("De som van de ingevoerde getallen is: " + som);
