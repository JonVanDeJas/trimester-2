function dubbeleVerwijder(array) {
    let uniekeArray = [];
    for (let i = 0; i < array.length; i++) {
        if (uniekeArray.indexOf(array[i]) === -1) {
            uniekeArray.push(array[i]);
        }
    }
    return uniekeArray;
}

let fruits = ["Apple", "Banana", "Apple", "Cherry", "Banana"];
let uniekeFruits = dubbeleVerwijder(fruits);
console.log(uniekeFruits); // Output: ["Apple", "Banana", "Cherry"]