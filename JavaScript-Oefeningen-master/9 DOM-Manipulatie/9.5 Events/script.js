function changeText() {
    let input = document.querySelector('input');
    let shoppingList = document.querySelector('#shopping-list');

    let item = input.value;
    let listItem = document.createElement('li');
    listItem.innerHTML = item;

    shoppingList.append(listItem);
    input.value = '';
}