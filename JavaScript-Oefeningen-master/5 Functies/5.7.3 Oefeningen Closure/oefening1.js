function maakTeller() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

let teller = maakTeller();
console.log(teller()); // Output: 1
console.log(teller()); // Output: 2