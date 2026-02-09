const prompt = require("prompt-sync")();

let lines = prompt("How many lines: "); //5

for (let i = 1; i <= lines; i++) { //5
    let line = "";
    for (let j = 1; j <= lines - i; j++) { //2
        line += " ";
    }
    for (let k = 1; k <= i; k++) { //3
        line += "#";
    }
    console.log(line);
}