function eersteEnLaatste(array) {
    return [array[0], array[array.length - 1]];
}

let fruits = ["Apple", "Banana", "Cherry", "Date"];
console.log(eersteEnLaatste(fruits)); // Output: ["Apple", "Date"]