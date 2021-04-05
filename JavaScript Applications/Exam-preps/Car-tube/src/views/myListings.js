import { html } from '../../node_modules/lit-html/lit-html.js';

import { getMyCars } from '../data/requests.js';
import { carTemplate } from './common/carTemplate.js';

const template = (cars) => html`
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">

        ${cars.length > 0 ? 
        cars.map(carTemplate) :
        html`<p class="no-cars"> You haven't listed any cars yet.</p>`}
        
    </div>
</section>`;

export const myListingsPage = async (ctx) => {
    const cars = await getMyCars(ctx.userData.id);
    ctx.render(template(cars));
}