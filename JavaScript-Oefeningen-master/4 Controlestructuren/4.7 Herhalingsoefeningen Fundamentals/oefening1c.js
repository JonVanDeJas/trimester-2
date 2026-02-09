const prompt = require("prompt-sync")();

let lines = prompt("How many lines: ");

for (let i = 1; i <= lines; i++) {
    let line = "";
    for (let j = 1; j <= lines - i; j++) {
        line += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        line += "#";
    }
    console.log(line);
}