const prompt = require("prompt-sync")();

let tekst = prompt("Geef een tekst in: ");
let laatsteLetter = tekst[tekst.length - 1];

if (laatsteLetter != ".") {
    tekst += ".";
}

console.log(tekst.toUpperCase());