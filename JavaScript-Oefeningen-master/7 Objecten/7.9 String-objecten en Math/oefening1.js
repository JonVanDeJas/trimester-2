function haalSubzin(zin, woord) {
    let zinnen = zin.split(". ");
    let result = zinnen.find(zin => {
        return zin.indexOf(woord) == 0;
    });
    return result;
}

let zin = "Dit is een Test. Een korte test."
console.log(haalSubzin(zin, "Een"));