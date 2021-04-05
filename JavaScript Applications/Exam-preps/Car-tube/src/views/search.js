import { html } from '../../node_modules/lit-html/lit-html.js';
import { getCarsByYear } from '../data/requests.js';

import { carTemplate } from './common/carTemplate.js';

const template = (cars,onSearch) => html`
<section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
        <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
        <button @click=${onSearch} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="listings">

        ${cars.length > 0 ?
            cars.map(carTemplate) :
            html`<p class="no-cars"> No results.</p>`}
        
    </div>
</section>`;

export const searchPage = async (ctx) => {
    const year = ctx.querystring.split('=')[1];
    let cars = [];
    if (year) {
        cars = await getCarsByYear(year);
    }
    ctx.render(template(cars, onSearch));

    function onSearch() {
        const searchedYear = Number(document.getElementById('search-input').value);

        if (Number.isNaN(searchedYear)) {
            return alert('Year must be a positive number!');
        }

        ctx.page.redirect('/search?year=' + searchedYear);
    }
}