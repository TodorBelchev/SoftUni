import { html } from './node_modules/lit-html/lit-html.js';

export const townsView = (towns) => html`<ul>${towns.map(townLi)}</ul>`;

const townLi = (town) => html`<li>${town}</li>`;