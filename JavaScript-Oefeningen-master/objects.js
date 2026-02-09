let persoon = {
    voornaam: "Frank",
    achternaam: "De Tank",
    leeftijd: 30,
    beroep: "programmeur",
    adres: {
        straat: "Kerkstraat",
        huisnummer: 12,
        postcode: "3650",
        stad: "Dilsen-Stokkem"
    },
    verjaar: function() {
        this.leeftijd++;
    },
    stelVoor: function() {
        return `Hallo, ik ben ${this.voornaam} de ${this.beroep}`;
    }
};

let {voornaam, ...overig} = persoon;
console.log(voornaam);
console.log(overig);


/*
let kopiePersoon = {...persoon, geslacht: "man" };
console.log(kopiePersoon.geslacht);

let { voornaam, leeftijd } = persoon;
console.log(voornaam);
console.log(leeftijd);
*/