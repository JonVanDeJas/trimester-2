let persoon = {
    naam: "Jan Jansen",
    leeftijd: 30,
    adres: {
        straat: "Kerkstraat 12",
        stad: "Amsterdam",
        postcode: "1012 AB"
    },
};

function toonPersoonDetails(persoonObj) {
    console.log(`Naam: ${persoonObj.naam}, Leeftijd: ${persoonObj.leeftijd}, Stad: ${persoonObj.adres.stad}`);
}

toonPersoonDetails(persoon);