let auto = {
    merk: "Audi",
    model: "TT",
    bouwjaar: "2020",
    kilometerstand: "150000"
};

updateKilometerStand(auto, 50);
toonAutoInfo(auto);

function updateKilometerStand (autoObj, aantalKm) {
    autoObj.kilometerstand += aantalKm;
}

function toonAutoInfo (autoObj) {
    console.log(`Merk: ${autoObj.merk} \nModel: ${autoObj.model} \nBouwjaar: ${autoObj.bouwjaar} \nKilometerstand: ${autoObj.kilometerstand}`);
}