const prompt = require("prompt-sync")();

let getal = prompt("Geef een getal in: ");

if (getal > 0) {
    console.log("Positief");
} else if (getal < 0) {
    console.log("Negatief");
} else {
    console.log("Nul");
}
