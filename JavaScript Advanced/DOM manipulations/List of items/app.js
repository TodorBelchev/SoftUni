function addItem() {
    const ul = document.getElementById('items');
    const input = document.getElementById('newItemText');
    const newLi = document.createElement('li');
    newLi.textContent = input.value;
    ul.appendChild(newLi);
    input.value = '';
}