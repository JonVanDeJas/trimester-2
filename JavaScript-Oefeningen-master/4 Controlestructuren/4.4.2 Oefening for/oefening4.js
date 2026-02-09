const prompt = require("prompt-sync")();

let tekst = prompt("Geef een tekst in: ");
let omgekeerd = "";

for (let i = tekst.length - 1; i >= 0; i--) {
    omgekeerd += tekst[i];
}
console.log(`De omgekeerd tekst is '${omgekeerd}'`);