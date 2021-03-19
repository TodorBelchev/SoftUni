import { html } from './node_modules/lit-html/lit-html.js';

export const listView = (towns) => html`<ul>${towns.map(createLis)}</ul>`;

const createLis = (town) => html`<li>${town}</li>`;