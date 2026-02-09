class Calculate {
    // Static method to sum two numbers
    static sum(a, b) {
        return a + b;
    }

    // Static method to calculate the difference between two numbers
    static difference(a, b) {
        return a - b;
    }
}

// Example usage:
console.log(Calculate.sum(10, 5)); // Output: 15
console.log(Calculate.difference(10, 5)); // Output: 5

// No need to create an instance of the class to call the static methods