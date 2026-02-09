// Bonuspunten als je de cart buiten de functies selecteert
// zodat je hiermee kan werken binnen alle functies
// zonder telkens de cart opnieuw te selecteren.
const cart = document.querySelector('#cart');

function addToCart(item) {
    let itemDiv = document.createElement('div');
    itemDiv.innerHTML = item;

    cart.appendChild(itemDiv);
}

function clearCart() {
    cart.innerHTML = "";
}