const prompt = require("prompt-sync")();

let ondergrens = Number(prompt("Ondergrens: "));
let bovengrens = Number(prompt("Bovengrens: "));

let som = 0;

for (let i = ondergrens; i <= bovengrens; i++) {
    if (i % 3 == 0) {
        som += i;
    }
}

console.log(`De som van alle getallen deelbaar door 3 tussen ${ondergrens} en ${bovengrens} bedraagt ${som}`);