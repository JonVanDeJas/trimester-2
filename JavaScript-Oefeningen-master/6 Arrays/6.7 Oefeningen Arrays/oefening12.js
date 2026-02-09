let waarden = [2, 7, 10, 11, 15, 18, 23, 28];
let gefilterdeWaarden = waarden.filter(groterDanTienEnEven);
console.log(gefilterdeWaarden);

function groterDanTienEnEven(waarde) {
    return waarde > 10 && waarde % 2 === 0;
}