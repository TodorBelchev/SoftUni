import { html } from './node_modules/lit-html/lit-html.js';

export const catsView = (cats) => html`<ul>${cats.map(catCard)}</ul>`;

const catCard = (cat) => html`
    <li @click=${showDetails}>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn">Show status code</button>
            <div class="status" style="display: none" id="100">
                <h4 class="card-title">Status Code: ${cat.statusCode}</h4>
                <p class="card-text">${cat.statusMessage}</p>
            </div>
        </div>
    </li>`;

function showDetails(e) {
    if (e.target.tagName !== 'BUTTON') { return; }
    const statusDiv = e.currentTarget.querySelector('.status');

    if (e.target.textContent.includes('Show')) {
        statusDiv.style.display = 'block';
        e.target.textContent = 'Hide status code';
    } else {
        statusDiv.style.display = 'none';
        e.target.textContent = 'Show status code';
    }
    
}