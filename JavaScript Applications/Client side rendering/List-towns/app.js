import { render } from './node_modules/lit-html/lit-html.js';
import { listView } from './listTemplate.js';

const root = document.getElementById('root');
const form = document.getElementById('towns-form');

form.addEventListener('submit', loadTowns);

function loadTowns(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const towns = formData.get('towns').split(', ');
    e.target.reset();

    render(listView(towns), root);
}