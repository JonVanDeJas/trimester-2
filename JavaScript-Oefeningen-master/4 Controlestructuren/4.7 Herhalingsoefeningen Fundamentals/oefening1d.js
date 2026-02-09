const prompt = require("prompt-sync")();

let lines = prompt("How many lines: ");
let interval = 5;
let counter = 0;

for (let i = 1; i <= lines; i++) {
    let line = "";
    for (let j = 1; j <= lines - i; j++) {
        line += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        if (counter % 5 == 0) {
            line += "@";
        } else {
            line += "#";
        }
        counter++;
    }
    console.log(line);
}