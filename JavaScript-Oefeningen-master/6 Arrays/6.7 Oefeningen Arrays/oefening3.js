function filterGroterDan(array, grens) {
    let nieuweArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > grens) {
            nieuweArray.push(array[i]);
        }
    }
    return nieuweArray;
}

let getallen = [1, 5, 10, 20, 30];
console.log(filterGroterDan(getallen, 15)); // Output: [20, 30]
