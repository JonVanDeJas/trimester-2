/* Zorgen dat prompt en localStorage werken */
const prompt = require("prompt-sync")();

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

/* Haalt bankAccount uit localStorage als JSON-string (verwijst naar de eerder gekozen key) */
let bankAccountJson = localStorage.getItem("bankAccount");
/* Zet de JSON-string om naar een JavaScript object */
let bankAccount = JSON.parse(bankAccountJson);

/* Interactie met gebruiker + aanpassen van bankAccount */
console.log(`Current balance: ${bankAccount.balance}`);

let amount;
let input = prompt("Would you like to deposit (d) or withdraw (w)? ");

if (input === "w") {
    amount = Number(prompt("How much would you like to withdraw? "));
    if (bankAccount.balance >= amount) {
        bankAccount.balance -= amount;
    } else {
        console.log("Insufficient balance.");
    }
} else if (input === "d"){
    amount = Number(prompt("How much would you like to deposit? "));
    bankAccount.balance += amount;
} else {
    input = prompt("Enter a 'd' to deposit or a 'w' to withdraw! ");
}

console.log(`New balance: ${bankAccount.balance}`);

/* bankaccount terug omzetten naar JSON + opslaan in localStorage */
bankAccountJson = JSON.stringify(bankAccount);
localStorage.setItem("bankAccount", bankAccountJson);