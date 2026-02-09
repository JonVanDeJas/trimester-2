const prompt = require("prompt-sync")();

// Vraag de gebruiker om een tekst in te voeren
let tekst = prompt("Voer een tekst in: ");

// Vraag de gebruiker om een scheldwoord in te geven
let scheldwoord = prompt("Voer een scheldwoord in: ");

// Controleer of de tekst het scheldwoord bevat
if (tekst.includes(scheldwoord)) {
  console.log("Dit is ongepast en niet professioneel. Schaam je!");
} else {
  console.log("Dit is gepast.");
}