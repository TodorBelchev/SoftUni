import { html, render } from './node_modules/lit-html/lit-html.js';
import { loadOneBook, deleteBook, loadBooks, createBookPost, editBookPut } from './data.js';

const root = document.getElementById('root');
const formRoot = document.getElementById('root');
const messageP = document.getElementById('message');

export const booksView = (books) => html`
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>${books.map(rows)}</tbody>
</table>

<div id="form-root">${addForm()}</div>`;

const rows = ([id, data]) => html`
    <tr>
        <td>${data.title}</td>
        <td>${data.author}</td>
        <td>
            <button @click=${() => { loadEditForm(id) }}>Edit</button>
            <button @click=${() => { delBook(id) }}>Delete</button>
        </td>
    </tr>`;

const addForm = () => html`
    <form id="add-form" @submit=${createBook}>
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>`;

const editForm = (id, data) => html`
    <form id="edit-form" @submit=${(e)=> { editBook(e, id) }}>
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title..." .value=${data.title}>
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author..." .value=${data.author}>
        <input type="submit" value="Save">
    </form>`;

async function loadEditForm(id) {
    const formRoot = document.getElementById('form-root');

    const response = await loadOneBook(id);

    const data = await response.json();

    render(editForm(id, data), formRoot);
}

async function delBook(id) {
    const response = await deleteBook(id);

    if (!response.ok) {
        const error = await response.json();
        notificationHandler(error.message);
        return;
    }

    notificationHandler('Successfully deleted!')
    start();
}

async function createBook(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const title = formData.get('title');
    const author = formData.get('author');

    if (title.trim() === '' || author.trim() === '') {
        notificationHandler('All fields are required!');
        return;
    }

    const response = await createBookPost({ title, author });
    const data = await response.json();

    if (!response.ok) {
        notificationHandler(data.message);
        return;
    }

    e.target.reset();
    notificationHandler('Successfully created!');
    start();
}

async function editBook(e, id) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const title = formData.get('title');
    const author = formData.get('author');

    if (title.trim() === '' || author.trim() === '') {
        notificationHandler('All fields are required!');
        return;
    }

    const response = await editBookPut(id, { title, author });
    const data = await response.json();

    if (!response.ok) {
        notificationHandler(data.message);
        return;
    }

    e.target.reset();
    notificationHandler('Successfully edited!');
    start();
}

export async function start() {
    const response = await loadBooks();
    const data = await response.json();

    if(!response.ok) {
        notificationHandler(data.message);
        return;
    }

    render(addForm(), formRoot);
    render(booksView(Object.entries(data)), root);
}

function notificationHandler(message) {
    messageP.textContent = message;

    setTimeout(() => {
        messageP.textContent = '';
    }, 3000);
}