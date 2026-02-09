class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log("Insufficient balance.");
        }
    }

    checkBalance() {
        console.log(`Balance: €${this.balance}`);
    }
}

let myAccount = new BankAccount(100);
mijnRekening.deposit(50);  // Saldo wordt 150
mijnRekening.withdraw(30); // Saldo wordt 120
mijnRekening.checkBalance(); // Output: Huidig saldo: €120
