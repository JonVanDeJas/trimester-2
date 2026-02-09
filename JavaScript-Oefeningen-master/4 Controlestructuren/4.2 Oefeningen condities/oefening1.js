const prompt = require("prompt-sync")();

let temperatuur = prompt("Wat is de temperatuur? ");
if (temperatuur > 20) {
    console.log("Het is warm");
} else {
    console.log("Het is koud");
}
