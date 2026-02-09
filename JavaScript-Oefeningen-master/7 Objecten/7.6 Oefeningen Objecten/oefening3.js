let persoon = {
    naam: "Jan Jansen",
    leeftijd: 30,
    adres: {
        straat: "Kerkstraat 12",
        stad: "Amsterdam",
        postcode: "1012 AB"
    },
    introduceer: function() {
        console.log(`Hallo, mijn naam is ${this.naam} en ik woon in ${this.adres.stad}`);
    }

};

function toonPersoonDetails(persoonObj) {
    console.log(`Naam: ${persoonObj.naam}, Leeftijd: ${persoonObj.leeftijd}, Stad: ${persoonObj.adres.stad}`);
}

toonPersoonDetails(persoon);
persoon.introduceer();