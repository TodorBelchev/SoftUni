import { html } from '../../node_modules/lit-html/lit-html.js';

import { getCarById, deleteCar as delCar } from '../data/requests.js';

const template = (car, isOwner, deleteCar) => html`
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src=${car.imageUrl}>
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${car.brand}</li>
            <li><span>Model:</span>${car.model}</li>
            <li><span>Year:</span>${car.year}</li>
            <li><span>Price:</span>${car.price}$</li>
        </ul>

        <p class="description-para">${car.description}</p>

        ${isOwner ? html`
        <div class="listings-butto1ns">
            <a href="/edit/${car._id}" class="button-list">Edit</a>
            <a @click=${deleteCar} href="javascript:void(0)" class="button-list">Delete</a>
        </div>` : ''}

    </div>
</section>`;

export const detailsPage = async (ctx) => {
    const car = await getCarById(ctx.params.id);
    const isOwner = ctx.userData && ctx.userData.id === car._ownerId;
    ctx.render(template(car, isOwner, deleteCar));

    async function deleteCar() {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            await delCar(car._id, ctx.userData.token);
            ctx.page.redirect('/listings');
        }
    }
}

