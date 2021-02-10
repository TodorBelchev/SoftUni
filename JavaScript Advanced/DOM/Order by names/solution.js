function solve() {
    const button = document.querySelector('#exercise button');
    button.addEventListener('click', add);
    const lis = document.querySelector('ol').querySelectorAll('li');
    const list = {};

    Array.from(lis).forEach(el => {
        if (el.textContent.trim().length !== 0) {
            const letter = el.textContent[0].toUpperCase();
            list[letter] = [];
            list[letter].push(el.textContent);
        }
    });

    function add() {
        const input = document.querySelector('input');
        const value = input.value;
        const letter = value[0].toUpperCase();
        const formattedName = letter + value.substring(1).toLowerCase();

        if (!list.hasOwnProperty(letter)) {
            list[letter] = [];
        }
        
        list[letter].push(formattedName);

        const index = letter.charCodeAt(0) - 65;
        lis[index].textContent = list[letter].join(', ');

        input.value = '';
    }
}