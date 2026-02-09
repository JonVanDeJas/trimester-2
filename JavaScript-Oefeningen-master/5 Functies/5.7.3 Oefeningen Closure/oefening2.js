function maakTeller() {
    let count = 0;
    return {
        verhoog: function() {
            count++;
            return count;
        },
        reset: function() {
            count = 0;
            return count;
        }
    };
}

let teller = maakTeller();
console.log(teller.verhoog()); // Output: 1
console.log(teller.verhoog()); // Output: 2
console.log(teller.reset());   // Output: 0