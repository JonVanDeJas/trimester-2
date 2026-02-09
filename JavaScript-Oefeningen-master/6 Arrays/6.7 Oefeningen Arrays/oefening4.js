function verdubbel(array) {
    return array.map(function(num) {
        return num * 2;
    });
}

let getallen = [1, 2, 3, 4];
console.log(verdubbel(getallen)); // Output: [2, 4, 6, 8]