const prompt = require("prompt-sync")();

function berekenSom(start, eind) {
    let som = 0;
    if (start <= eind) {
        for (let i = start; i <= eind; i++) {
            som += i;
        }
    } else {
        for (let i = eind; i <= start; i++) {
            som += i;
        }
    }
    
    return som;
}

let startGetal = Number(prompt("Voer het startgetal in: "));
let eindGetal = Number(prompt("Voer het eindgetal in: "));
let resultaat = berekenSom(startGetal, eindGetal);
console.log("De som van alle getallen tussen " + startGetal + " en " + eindGetal + " is " + resultaat);
// Output (bijvoorbeeld):
// De som van alle getallen tussen 1 en 5 is 15
