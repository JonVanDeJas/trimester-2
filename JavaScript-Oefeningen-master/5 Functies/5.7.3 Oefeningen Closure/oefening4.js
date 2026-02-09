function maakGroet(naam) {
    return {
        groet: function() {
            return "Hallo, " + naam + "!";
        },
        wijzigNaam: function(nieuweNaam) {
            naam = nieuweNaam;
        }
    };
}

let groet = maakGroet("Alice");
console.log(groet.groet()); // Output: "Hallo, Alice!"
groet.wijzigNaam("Bob");
console.log(groet.groet()); // Output: "Hallo, Bob!"