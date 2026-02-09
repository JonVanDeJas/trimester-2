// Maakt een localStorage aan indien dit nog niet gebeurd is.
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

// Maakt een bankrekening aan met saldo = 0.
let bankAccount = {
	balance: 0,
};

// Zet bankAccount om naar een JSON-string
let bankJson = JSON.stringify(bankAccount);
// Slaat de JSON-string op in localStorage met als key "bankAccount"
localStorage.setItem("bankAccount", bankJson);