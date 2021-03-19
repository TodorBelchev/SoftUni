import { render } from './node_modules/lit-html/lit-html.js';
import { catsView } from './catsView.js';
import { cats } from './catSeeder.js';

const root = document.getElementById('allCats');

render(catsView(cats), root);