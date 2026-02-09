const prompt = require("prompt-sync")();

// Vraag de gebruiker om een tekst in te voeren
let tekst = prompt("Voer een tekst in:");

// Verwijder alle extra spaties aan het begin en einde van de string
let getrimdeTekst = tekst.trim();

// Toon de aangepaste string in de console
console.log(getrimdeTekst);