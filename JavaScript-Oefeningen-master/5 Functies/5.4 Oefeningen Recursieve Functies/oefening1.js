function macht(x, n) {
    // Basisgeval: elke macht met exponent 0 is 1
    if (n === 0) {
        return 1;
    } 
    // Recursieve aanroep: vermenigvuldig x met de macht van x tot de macht n-1
    else {
        return x * macht(x, n - 1);
    }
}

// Voorbeeldgebruik:
console.log(macht(2, 3)); // Output: 8 (2^3 = 2 * 2 * 2 = 8)
console.log(macht(5, 2)); // Output: 25 (5^2 = 5 * 5 = 25)
console.log(macht(3, 0)); // Output: 1 (elke macht tot de exponent 0 is 1)
