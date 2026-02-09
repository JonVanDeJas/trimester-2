const inputElement = document.querySelector("#input-length");

function convertToCm() {
    const length = inputElement.value;
    let cm = length * 2.54;
    cm = Math.round(cm * 100) / 100;
    const output = `${cm} cm`;

    updateResult(output);
}

function convertToInch() {
    const length = inputElement.value;
    let inch = length / 2.54;
    inch = Math.round(inch * 100) / 100;
    const output = `${inch} inch`;

    updateResult(output);
}

function updateResult(result) {
    const resultElement = document.querySelector("#result");
    resultElement.innerHTML = result;
}