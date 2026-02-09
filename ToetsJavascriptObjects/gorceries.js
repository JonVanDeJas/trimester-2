const prompt = require("prompt-sync")();

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

let groceries = {
    apples: 0,
    pears: 0,
    bananas:0
};

let savedGroceries = localStorage.getItem("groceries");
if (savedGroceries) {
    groceries = JSON.parse(savedGroceries);
}

console.log("What would u like to add to your groceries?");
const interaction = prompt("'apples' 'pears' 'bananas'?");
if (interaction == "apples") {
    groceries.apples = groceries.apples + 1;
    console.log(groceries);
} else if (interaction == "pears") {
    groceries.pears = groceries.pears + 1;
    console.log(groceries);
} else if (interaction == "bananas") {
    groceries.bananas = groceries.bananas + 1;
    console.log(groceries);
} else {
    console.log("Please write 'apples' 'pears' or 'bananas'")
    console.log(groceries);
}

let groceriesstring = JSON.stringify(groceries);
localStorage.setItem("groceries", groceriesstring);