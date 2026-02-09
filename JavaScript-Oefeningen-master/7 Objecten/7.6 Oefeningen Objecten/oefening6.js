let boek = {
    titel: "De Ontdekking van de Hemel",
    auteur: "Harry Mulisch",
    jaar: 1992,
    genre: "Roman"
};

function toonBoekInfo(titel, auteur, details) {
    console.log(`${titel} is geschreven door ${auteur}.`);
    console.log("Details:", details);
}

let { titel, auteur, ...details } = boek;

toonBoekInfo(titel, auteur, details);