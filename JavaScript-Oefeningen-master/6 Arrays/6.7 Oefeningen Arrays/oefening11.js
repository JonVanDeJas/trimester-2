function combineerEnManipuleer(array1, array2, extraStart, extraEinde) {
    // Stap 1: Combineer beide arrays
    let gecombineerdeArray = [...array1, ...array2];
    
    // Stap 2: Voeg een extra waarde toe aan het begin en het einde
    gecombineerdeArray = [extraStart, ...gecombineerdeArray, extraEinde];
    
    // Stap 3: Sorteer de array in aflopende volgorde
    gecombineerdeArray.sort(function(a, b){return b - a});
    
    return gecombineerdeArray;
}

let array1 = [10, 20, 30];
let array2 = [5, 15, 25];
let extraStart = 50;
let extraEinde = 5;

let resultaat = combineerEnManipuleer(array1, array2, extraStart, extraEinde);
console.log(resultaat);
