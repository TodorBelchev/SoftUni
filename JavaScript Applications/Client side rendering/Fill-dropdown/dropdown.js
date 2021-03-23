import { html, render } from './node_modules/lit-html/lit-html.js';

const select = document.getElementById('menu');
const addForm = document.getElementById('add-form');
const input = document.getElementById('item-text');
const messageP = document.getElementById('message');

addForm.addEventListener('submit', addItem);

async function loadOptions() {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');

    const data = await response.json();

    render(html`${Object.values(data).map(x => html`<option>${x.text}</option>`)}`, select);
}

async function addItem(e) {
    e.preventDefault();

    if (input.value.trim() === '') {
        handleNotifications('Please enter valid value!');
        return;
    }

    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: input.value.trim() })
    });

    if (!response.ok) {
        handleNotifications('Creation failed!');
        return;
    }

    handleNotifications('Successfully created!');
    input.value = '';
    loadOptions();
}

function handleNotifications(message) {
    messageP.textContent = message;

    setTimeout(() => {
        messageP.textContent = '';
    }, 3000);
}

loadOptions();