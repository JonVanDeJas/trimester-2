const prompt = require("prompt-sync")();

let jaar = prompt("Welk jaar is het? ");
let maand = prompt("De hoeveelste maand is het? ");

if ((jaar % 4 === 0 && jaar % 100 !== 0) || (jaar % 400 === 0)) {
    if (maand === 2) {
        console.log("Februari in een schrikkeljaar");
    } else {
        console.log("Geen februari");
    }
} else {
    if (maand === 2) {
        console.log("Februari in een normaal jaar");
    } else {
        console.log("Geen februari");
    }
}
