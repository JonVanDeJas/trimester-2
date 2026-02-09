const prompt = require("prompt-sync")();

let maand = Number(prompt("Voer een getal in tussen 1 en 12 dat een maand van het jaar vertegenwoordigt (1 voor januari, 2 voor februari, enz.):"));

switch (maand) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Lente");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Zomer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Herfst");
        break;
    default:
        console.log("Ongeldige maand");
}
