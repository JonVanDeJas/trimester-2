function telDeElementen(...getallen) {
    let som = 0;
    getallen.forEach(getal => {
        som += getal;
    });
    return som;
}

let a = [1, 2, 3];
console.log(telDeElementen(...a));