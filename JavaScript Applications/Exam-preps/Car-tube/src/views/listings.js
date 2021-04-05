import { html } from '../../node_modules/lit-html/lit-html.js';

import { getCars } from '../data/requests.js';
import { carTemplate } from './common/carTemplate.js';

const template = (cars) => html`
<section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings">

        ${cars.length > 0 ?
            cars.map(carTemplate) :
            html`<p class="no-cars">No cars in database.</p>`}
        
    </div>
</section>`; 

export const listingsPage = async (ctx) => {
    const cars = await getCars();
    ctx.render(template(cars));
};