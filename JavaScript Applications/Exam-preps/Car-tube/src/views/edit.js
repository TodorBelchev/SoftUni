import { html } from '../../node_modules/lit-html/lit-html.js';

import { getCarById, editCar } from '../data/requests.js';

const template = (car, onSubmit) => html`
<section id="edit-listing">
    <div class="container">

        <form @submit=${onSubmit} id="edit-form">
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand" .value=${car.brand}>

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model" .value=${car.model}>

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description" .value=${car.description}>

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year" .value=${car.year}>

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl" .value=${car.imageUrl}>

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price" .value=${car.price}>

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section>`;

export const editPage = async (ctx) => {
    const car = await getCarById(ctx.params.id);
    ctx.render(template(car, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const brand = formData.get('brand').trim();
        const model = formData.get('model').trim();
        const description = formData.get('description').trim();
        let year = formData.get('year').trim();
        const imageUrl = formData.get('imageUrl').trim();
        let price = formData.get('price').trim();

        if (!brand || !model || !description || !year || !imageUrl || !price) {
            return alert('All fields are required!');
        }

        year = Number(year);
        price = Number(price);

        if (Number.isNaN(year) || Number.isNaN(price)) {
            return alert('Year and price must be positive numbers!');
        }

        await editCar(car._id, { brand, model, description, year, imageUrl, price }, ctx.userData.token);
        ctx.page.redirect('/details/' + car._id);
    }
}