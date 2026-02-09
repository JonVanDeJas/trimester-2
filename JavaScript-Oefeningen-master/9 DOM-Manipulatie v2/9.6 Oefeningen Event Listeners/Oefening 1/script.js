let inputName = document.querySelector("#input-name");
let inputSurname = document.querySelector("#input-surname");
let inputEmail = document.querySelector("#input-email");

let name = inputName.value;
let surname = inputSurname.value;
let email = inputEmail.value;

function addAccount() {
    let name = inputName.value;
    let surname = inputSurname.value;
    let email = inputEmail.value;

    console.log(`${name}, ${surname}, ${email}`);
}

