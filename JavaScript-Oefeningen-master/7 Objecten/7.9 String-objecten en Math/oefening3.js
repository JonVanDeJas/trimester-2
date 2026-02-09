let zin = "Dit is een lange tekst.";
console.log(verwijderWoord(zin, "lange"));

function verwijderWoord(tekst, woord) {
    let deelzinnen = tekst.split(woord);
    deelzinnen = deelzinnen.map(zin => zin.trim()); // Uitbreiding: dubbele spaties wegwerken

    // Dit is nog een andere mogelijke oplossing voor de uitbreiding
    // deelzinnen = deelzinnen.map(function(zin) {
    //     return zin.trim();
    // });

    let nieuweZin = deelzinnen.join(" "); // Spatie tussen de aanhalingstekens in enkel nodig voor de uitbreiding.
    return nieuweZin;
}