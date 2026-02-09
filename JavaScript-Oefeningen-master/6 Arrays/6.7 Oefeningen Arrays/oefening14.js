let namen = [ "Frank", "Franky", "Frans", "Francis", "Franciscus", "Francois" ]
let naamMetZevenLetters = vindNaamMetLengte(namen, 7);
console.log(naamMetZevenLetters);

function vindNaamMetLengte (namen, n) {
    let naam = namen.find(function (naam) {
        return naam.length == n;
    });

    return naam;
}