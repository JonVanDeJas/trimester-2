function maakBoodschappenlijst(fruit, groenten) {
    let lijst = fruit.concat(groenten);
    lijst.sort();

    /*
    lijst.forEach(function(item, index) {
        console.log(index + ": " + item);
    });
    */

    for (let i = 0; i < lijst.length; i++) {
        console.log(`${i}: ${lijst[i]}`);
    }
}

let fruits = ["Apple", "Banana"];
let vegetables = ["Carrot", "Lettuce"];
maakBoodschappenlijst(fruits, vegetables);
// Output:
// 0: Apple
// 1: Banana
// 2: Carrot
// 3: Lettuce