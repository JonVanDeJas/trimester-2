let auto = {
    merk: "Tesla",
    model: "Model S",
    bouwjaar: 2020
};

function upgradeAuto(auto, nieuweBouwjaar) {
    return { ...auto, bouwjaar: nieuweBouwjaar };
}

let nieuweAuto = upgradeAuto(auto, 2022);
console.log(nieuweAuto);