// Maakt het mogelijk om prompt() te gebruiken
const prompt = require("prompt-sync")();

// Laat de gebruiker zijn naam typen en slaat hem op in een binding/variabele.
let naam = prompt("Wat is je naam?");
console.log("Je naam is " + naam + ".");