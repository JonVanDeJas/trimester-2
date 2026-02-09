// Selecteert het eerste button-element
console.log(document.querySelector('button').innerHTML);
document.querySelector('button')
    .innerHTML = 'Changed';

console.log(document.querySelector('.js-button'));

const buttonElement = document.querySelector('.js-button');
console.log(buttonElement);

//5:48 https://www.youtube.com/watch?v=EerdGm-ehJQ

/*
********************************************

// Verwijdert alles in het body-element
// Vervangt het door de string "Hello"
document.body.innerHTML = "Hello";
// Stelt de title-property van het document-object in
document.title = "Good job!";

********************************************

console.log(document.title);
document.title = 'Changed';

console.log(document.body);
console.log(typeof document.body);

console.log(document.body.innerHTML);
document.body.innerHTML = 'Changed';

document.body.innerHTML = '<button>Good job!</button>';

*/