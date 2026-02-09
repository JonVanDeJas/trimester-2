const prompt = require("prompt-sync")();

let inkomen = Number(prompt("Wat is je bruto inkomen? "));

let belastingPercentage;
let belasting;
let nettoInkomen;

if (inkomen < 10000) {
    belastingPercentage = 0;
} else if (inkomen >= 10000 && inkomen < 20000) {
    belastingPercentage = 10;
} else if (inkomen >= 20000 && inkomen < 50000) {
    belastingPercentage = 20;
} else {
    belastingPercentage = 30;
}

belasting = (inkomen * belastingPercentage) / 100;
nettoInkomen = inkomen - belasting;

console.log("Belasting: " + belasting);
console.log("Netto Inkomen: " + nettoInkomen);
