const prompt = require("prompt-sync")();

// Vraag de gebruiker om een tekst in te voeren
let tekst = prompt("Voer een tekst in:");

// Vervang alleen het eerste voorkomen van "is" door "was"
let aangepast = tekst.replace("is", "was");

// Toon de aangepaste tekst in de console
console.log(aangepast);