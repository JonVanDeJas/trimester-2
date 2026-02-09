function addItem() {
    let input = document.getElementById('to-do-item');
    let item = input.value;
    
    let itemDiv = document.createElement('div');
    itemDiv.innerHTML = item;
    document.body.appendChild(itemDiv);
}