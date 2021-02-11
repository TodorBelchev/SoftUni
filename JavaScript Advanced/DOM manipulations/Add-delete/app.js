function addItem() {
    const ul = document.getElementById('items');
    const input = document.getElementById('newText');
    const newLi = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.addEventListener('click', erase);
    newLi.textContent = input.value;
    newLi.appendChild(a);
    a.textContent = '[Delete]';
    ul.appendChild(newLi);
    input.value = '';

    function erase(e) {
        const el = e.target.parentElement;
        el.parentElement.removeChild(el);
    }
    
}