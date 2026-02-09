const prompt = require("prompt-sync")();

// Vraag de gebruiker om een tekst in te voeren
let tekst = prompt("Voer een tekst in:");

// Controleer de lengte van de tekst en toon het juiste bericht in de console
if (tekst.length > 10) {
  console.log("Dit is een lange tekst.");
} else {
  console.log("Dit is een korte tekst.");
}
