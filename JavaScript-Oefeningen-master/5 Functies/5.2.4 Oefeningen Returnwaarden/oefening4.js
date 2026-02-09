const prompt = require("prompt-sync")();

function isPrime(n) {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    
    return true;
}

function grootstePriem(limiet) {
    for (let i = limiet - 1; i > 1; i--) {
        if (isPrime(i)) {
            return i;
        }
    }
    return null; // Als er geen priemgetal gevonden wordt onder de limiet
}

let limiet = Number(prompt("Voer een limiet in:"));
let grootste = grootstePriem(limiet);
if (grootste !== null) {
    console.log("Het grootste priemgetal onder " + limiet + " is " + grootste);
} else {
    console.log("Er is geen priemgetal onder " + limiet);
}
// Output (bijvoorbeeld):
// Als de limiet 20 is, zou het resultaat zijn: Het grootste priemgetal onder 20 is 19
