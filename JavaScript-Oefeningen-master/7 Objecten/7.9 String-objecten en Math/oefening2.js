let tekst = "Dit is een test. Een degelijke test. Hiermee ga ik te weten komen of mijn functie werkt of niet"

console.log(splitsInZinnen(tekst));

function splitsInZinnen(tekst) {
    let zinnen = tekst.split('.');
    zinnen = zinnen.map(zin => zin.trim() + '.');
    return zinnen;
}