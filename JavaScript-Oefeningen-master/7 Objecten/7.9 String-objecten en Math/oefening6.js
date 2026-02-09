const b = 4;
const c = 5;
const alpha = 1;
const a = cosinusregel(b, c, alpha);
console.log(a);

function cosinusregel(b, c, alpha) {
    const bSquared = Math.pow(b, 2);
    const cSquared = Math.pow(c, 2);

    const a = Math.sqrt(bSquared + cSquared + 2 * b * c * Math.cos(alpha));
    return a;
}
