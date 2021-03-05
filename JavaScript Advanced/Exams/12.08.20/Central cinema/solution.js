function solve() {
    const [nameInput, hallInput, priceInput] = document.querySelectorAll('#container input');
    const moviesUl = document.querySelector('#movies ul');
    const archiveUl = document.querySelector('#archive ul');
    moviesUl.innerHTML = '';
    archiveUl.innerHTML = '';
    const clearBtn = document.querySelector('#archive button');
    clearBtn.addEventListener('click', clearMovies);
    const addBtn = document.querySelector('#container button');
    addBtn.addEventListener('click', addMovie);

    function clearMovies() {
        archiveUl.innerHTML = '';
    }

    function addMovie(e) {
        e.preventDefault();
        if (nameInput.value.trim() === '' || hallInput.value.trim() === '' || !Number(priceInput.value)) {
            return;
        }

        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = `${nameInput.value}`;
        const strong = document.createElement('strong');
        strong.textContent = `Hall: ${hallInput.value}`;
        const div = document.createElement('div');
        const archiveBtn = document.createElement('button');
        archiveBtn.textContent = 'Archive';
        archiveBtn.addEventListener('click', archiveMovie);
        const strongDiv = document.createElement('strong');
        strongDiv.textContent = `${Number(priceInput.value).toFixed(2)}`;
        const input = document.createElement('input');
        input.placeholder = 'Tickets Sold';

        div.appendChild(strongDiv);
        div.appendChild(input);
        div.appendChild(archiveBtn);
        li.appendChild(span);
        li.appendChild(strong);
        li.appendChild(div);
        moviesUl.appendChild(li);

        nameInput.value = '';
        hallInput.value = '';
        priceInput.value = '';

        function archiveMovie(e) {
            const ticketsSoldInput = li.querySelector('input');

            if (!Number(ticketsSoldInput.value)) {
                return;
            }

            strong.textContent = `Total amount: ${(Number(strongDiv.textContent) * Number(input.value)).toFixed(2)}`;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', deleteMovie);
            li.appendChild(deleteBtn);
            archiveUl.appendChild(li);

            div.remove();
        }

        function deleteMovie() {
            li.remove();
        }
    }
}