function solve() {
    const dropButton = document.querySelector('#dropdown');
    const ulElement = document.querySelector('#dropdown-ul');
    const box = document.querySelector('#box');
    dropButton.addEventListener('click', show);
    ulElement.addEventListener('click', color);

    function show() {
        if (ulElement.style.display === 'block') {
            ulElement.style.display = 'none' ;
            box.style.backgroundColor = 'black';
            box.style.color = 'white';
        } else {
            ulElement.style.display = 'block';
            box.style.backgroundColor = 'black';
        }
    }

    function color(e) {
        const liElement = e.target;
        const currentColor = liElement.textContent;
        box.style.backgroundColor = currentColor;
        box.style.color = 'black';
    }
}