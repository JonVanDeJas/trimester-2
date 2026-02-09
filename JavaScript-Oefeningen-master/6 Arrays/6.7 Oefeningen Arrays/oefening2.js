function keerOm(array) {
    let nieuweArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        nieuweArray.push(array[i]);
    }
    return nieuweArray;
}

let fruits = ["Apple", "Banana", "Cherry"];
console.log(keerOm(fruits)); // Output: ["Cherry", "Banana", "Apple"]
