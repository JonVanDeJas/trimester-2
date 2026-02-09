function changeSubscribe() {
    let button = document.querySelector("#subscribe-button");

    /* Basis */ 
    /*
    button.innerHTML = "Subscribed";
    */

    /* Uitbreiding */
    if (button.innerHTML === "Subscribe") {
        button.innerHTML = "Subscribed";
        button.style.background = "lightgrey";
        button.style.border = "lightgrey 3px solid";
        button.style.color = "black";
    } else {
        button.innerHTML = "Subscribe";
        button.style.background = "black";
        button.style.border = "black 3px solid";
        button.style.color = "white";
    }
}