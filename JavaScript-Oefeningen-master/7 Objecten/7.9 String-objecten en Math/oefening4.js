let getal = 30;
console.log(rondVierkantswortelAf(getal));

function rondVierkantswortelAf(getal) {
    let result = Math.sqrt(getal);
    result = Math.round(result);
    return result;
}