function berekenKorting(prijs, kortingsgroep, aantal) {
    const kortingA = 0.10;
    const kortingB = 0.20;

    let totaal;
    switch (kortingsgroep) {
        case "a":
            totaal = prijs * aantal * (1 - kortingA);
            console.log("De totaalprijs na " + (kortingA * 100) + "% korting is " + totaal + " euro.")
            break;
        case "b":
            totaal = prijs * aantal * (1 - kortingB);
            console.log("De totaalprijs na " + (kortingb * 100) + "% korting is " + totaal + " euro.")
            break;
        default:
            console.log("Geef 'a' of 'b' in voor de kortingsgroep.")
    }
}

berekenKorting(100, 10, 3); // Output: De totaalprijs na 10% korting is 270 euro.
berekenKorting(50, 20, 5); // Output: De totaalprijs na 20% korting is 200 euro.
