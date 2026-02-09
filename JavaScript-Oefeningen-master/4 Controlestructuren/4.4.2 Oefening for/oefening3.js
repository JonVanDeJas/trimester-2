const prompt = require("prompt-sync")();

let start = Number(prompt("Voer het startgetal in:"));
let eind = Number(prompt("Voer het eindgetal in:"));

for (let i = start; i <= eind; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}