function fibonacci(n) {
    if (n === 0) {
        return 0; // Basisgeval: F(0) = 0
    } else if (n === 1) {
        return 1; // Basisgeval: F(1) = 1
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2); // Recursieve aanroep: F(n) = F(n-1) + F(n-2)
    }
}

// Voorbeeldgebruik:
console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(6)); // Output: 8