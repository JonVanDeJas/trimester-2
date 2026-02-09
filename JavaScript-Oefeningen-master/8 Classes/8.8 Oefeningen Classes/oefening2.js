class Car {
    constructor(brand, mileage) {
        this.brand = brand;
        this._mileage = mileage;
    }

    get mileage() {
        return this._mileage;
    }

    set mileage(newMileage) {
        if (newMileage > this._mileage) {
            this._mileage = newMileage;
        } else {
            console.log("Mileage cannot be lowered.");
        }
    }

    showInfo() {
        console.log(`Car: ${this.brand}, Mileage: ${this._mileage}`);
    }
}

let myCar = new Car("Toyota", 50000);
myCar.mileage = 60000; // Geldig
myCar.mileage = 40000; // Fout
myCar.showInfo(); // Output: Auto: Toyota, Kilometerstand: 60000
