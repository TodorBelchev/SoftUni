function solve() {
    const editForm = document.querySelector('#edit-form');
    const createForm = document.querySelector('#create-form');
    const editTitleInput = document.querySelector('#edit-title');
    const editAuthorInput = document.querySelector('#edit-author');
    const loadBtn = document.querySelector('#loadBooks');
    const tbody = document.querySelector('tbody');
    const finalEditBtn = document.querySelector('#final-edit');
    const addBtn = document.querySelector('#addBtn');
    const URL = 'http://localhost:3030/jsonstore/collections/books';
    const errorParagraph = document.querySelector('#error');

    addBtn.addEventListener('click', addBook);
    loadBtn.addEventListener('click', loadBooks);

    loadBooks();

    function loadBooks() {
        tbody.innerHTML = '';

        fetch(URL)
            .then(res => res.json())
            .then(data => {
                Object.entries(data).forEach(([key, value]) => {
                    const current = createHtmlElement('tr', '', { 'data-key': key }, {}, [
                        createHtmlElement('td', value.title, {}, {}, []),
                        createHtmlElement('td', value.author, {}, {}, []),
                        createHtmlElement('td', '', {}, {}, [
                            createHtmlElement('button', 'Edit', {}, { click: editBook }, []),
                            createHtmlElement('button', 'Delete', {}, { click: deleteBook }, []),
                        ]),
                    ]);
                    tbody.appendChild(current);
                });
            })
            .catch(handleError);
    }

    function editBook(e) {
        editForm.style.display = 'block';
        createForm.style.display = 'none';
        const parent = e.target.parentElement.parentElement;
        const id = parent.dataset.key;

        fetch(`${URL}/${id}`)
            .then(res => res.json())
            .then(data => {
                editTitleInput.value = data.title;
                editAuthorInput.value = data.author;
            })
            .catch(handleError);

        finalEditBtn.setAttribute('data-key', id);
        finalEditBtn.addEventListener('click', sendEditedBook);
    }

    function sendEditedBook(e) {
        e.preventDefault();

        if (editTitleInput.value.trim() === '' || editAuthorInput.value.trim() === '') {
            errorParagraph.textContent += 'All inputs must not be empty!';
            return;
        } else {
            errorParagraph.textContent = '';
        }

        const id = e.target.dataset.key;

        const obj = {
            author: editAuthorInput.value,
            title: editTitleInput.value,
        }

        fetch(`${URL}/${id}`, { method: 'PUT', body: JSON.stringify(obj) })
            .then(res => res.json())
            .then(data => {
                loadBooks(data);
                editForm.style.display = 'none';
                createForm.style.display = 'block';
            })
            .catch(err => {
                handleError(err);
                createForm.style.display = 'block';
            });
    }

    function deleteBook(e) {
        const parent = e.target.parentElement.parentElement;
        const id = parent.dataset.key;
        
        fetch(`${URL}/${id}`, { method: 'DELETE' })
            .then(res => {
                parent.remove();
                createForm.style.display = 'block';
                editForm.style.display = 'none';
            })
            .catch(handleError);
    }

    function addBook(e) {
        e.preventDefault();
        const titleInput = document.querySelector('#title');
        const authorInput = document.querySelector('#author');

        const obj = {
            title: titleInput.value,
            author: authorInput.value,
        }

        if (titleInput.value.trim() === '' || authorInput.value.trim() === '') {
            errorParagraph.textContent += 'All inputs must not be empty!';
            return;
        } else {
            errorParagraph.textContent = '';
        }

        fetch(URL, { method: 'POST', body: JSON.stringify(obj) })
            .then(res => {
                titleInput.value = '';
                authorInput.value = '';
                loadBooks();
            })
            .catch(handleError)
    }

    function handleError(err) {
        errorParagraph.textContent = err.message;
        setTimeout(() => {
            errorParagraph.textContent = '';
        }, 2000)
    }

    function createHtmlElement(type, content, attributes, events, childs) {
        const element = document.createElement(type);
        element.textContent = content;

        Object.keys(attributes).forEach(x => element.setAttribute(x, attributes[x]));

        Object.keys(events).forEach(x => element.addEventListener(x, events[x]));

        childs.forEach(x => element.appendChild(x));

        return element;
    }
}

solve();