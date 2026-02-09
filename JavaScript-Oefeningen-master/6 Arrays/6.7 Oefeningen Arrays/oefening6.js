function printAlleMogelijkheden(array) {
    array.forEach(function(element1) {
        array.forEach(function(element2) {
            console.log(element1, element2);
        });
    });
}

let getallen = [1, 2, 3];
printAlleMogelijkheden(getallen);
// Output:
// 1 1
// 1 2
// 1 3
// 2 1
// 2 2
// 2 3
// 3 1
// 3 2
// 3 3