class Person {
    // Private field
    #nrn;

    // Constructor that accepts name and nrn (national register number)
    constructor(name, nrn) {
        this.name = name;
        this.#nrn = nrn; // Private field
    }

    // Method to show the nrn in the console
    showNrn() {
        console.log(`National Register Number: ${this.#nrn}`);
    }
}

// Example usage:
const person1 = new Person('John Doe', '123456789');
person1.showNrn(); // This will log the NRN to the console

// Trying to access the private field outside the class will result in an error
console.log(person1.nrn); // Undefined because #nrn is private