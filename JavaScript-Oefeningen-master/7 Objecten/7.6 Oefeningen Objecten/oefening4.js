let student = {
    naam: "Sara",
    leeftijd: 22,
    studie: "Informatica",
    beschrijf: function() {
        console.log(`${this.naam} studeert ${this.studie}.`);
    }
};

function verwelkomStudent(naam, studie) {
    console.log(`Welkom, ${naam}! Veel succes met je studie ${studie}.`);
}

let { naam, studie } = student;
verwelkomStudent(naam, studie);
// Output: "Welkom, Sara! Veel succes met je studie Informatica."