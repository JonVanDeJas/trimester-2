let grootte = 15;
let bord = "";

for (let i = 0; i < grootte; i++) {
    for (let j = 0; j < grootte; j++) {
        if ((i + j) % 2 == 0) {
            bord += "#";
        } else {
            bord += " ";
        }
    }
    bord += "\n";
}

console.log(bord);