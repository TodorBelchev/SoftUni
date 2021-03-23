export const loadBooks = async () => await fetch('http://localhost:3030/jsonstore/collections/books');

export const loadOneBook = async (id) => await fetch('http://localhost:3030/jsonstore/collections/books/' + id);

export const deleteBook = async (id) => await fetch('http://localhost:3030/jsonstore/collections/books/' + id, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const createBookPost = async (data) => await fetch('http://localhost:3030/jsonstore/collections/books/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
});

export const editBookPut = async (id, data) => await fetch('http://localhost:3030/jsonstore/collections/books/' + id, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
});