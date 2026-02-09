function maakRekening() {
    let saldo = 0;
    return {
        stort: function(bedrag) {
            saldo += bedrag;
            return saldo;
        },
        opnemen: function(bedrag) {
            if (bedrag <= saldo) {
                saldo -= bedrag;
                return saldo;
            } else {
                return "Onvoldoende saldo";
            }
        },
        bekijkSaldo: function() {
            return saldo;
        }
    };
}

let mijnRekening = maakRekening();
console.log(mijnRekening.stort(100)); // Output: 100
console.log(mijnRekening.opnemen(30)); // Output: 70
console.log(mijnRekening.bekijkSaldo()); // Output: 70