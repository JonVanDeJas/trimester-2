const a = 5;
const beta = 1.047;
const alpha = 0.667;
let b = sinusregelzijde(a, alpha, beta);


function sinusregelzijde(a, alpha, beta) {
    bside = (a * Math.sin(beta))/Math.sin(alpha);
    return Math.round(bside,3);
}

function sinusregelhoek(a, b, alpha) {
    sinusbeta = (b * Math.sin(alpha))/a;
    hoekbeta = Math.asin(sinusbeta , 3);
    return hoekbeta;
} 

hoekberekendbeta = sinusregelhoek(a, b, alpha);
console.log(Math.round(hoekberekendbeta, 3));