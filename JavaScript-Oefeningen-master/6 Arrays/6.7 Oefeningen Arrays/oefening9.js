function wisselOm(array) {
    [array[0], array[1]] = [array[1], array[0]];
    return array;
}

let getallen = [1, 2, 3];
console.log(wisselOm(getallen)); // Output: [2, 1, 3]
