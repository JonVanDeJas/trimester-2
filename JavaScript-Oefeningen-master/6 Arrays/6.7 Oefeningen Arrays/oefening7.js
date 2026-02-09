function splitsArray(array, n) {
    let eersteDeel = array.slice(0, n);
    let tweedeDeel = array.slice(n);
    return [eersteDeel, tweedeDeel];
}

let getallen = [1, 2, 3, 4, 5, 6, 7];
let [eersteDeel, tweedeDeel] = splitsArray(getallen, 4);
console.log(eersteDeel); // Output: [1, 2, 3, 4]
console.log(tweedeDeel); // Output: [5, 6, 7]