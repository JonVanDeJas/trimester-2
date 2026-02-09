if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

let gebruikersVoorkeuren = {
    kleurenschema: "donker",
    lettergrootte: "16px",
    meldingen: true
}; 

const voorkeurenJson = JSON.stringify(gebruikersVoorkeuren);
localStorage.setItem("voorkeuren", voorkeurenJson);

const voorkeurenJson2 = localStorage.getItem("voorkeuren");
console.log(JSON.parse(voorkeurenJson2));
