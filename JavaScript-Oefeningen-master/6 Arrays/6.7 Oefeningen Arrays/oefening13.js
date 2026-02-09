let getallen = [1, 5, 15, 4, 22, 9];
let eersteEven = getallen.find(vindEersteEven);
console.log(eersteEven);

function vindEersteEven(getal) {
    return getal % 2 === 0;
}