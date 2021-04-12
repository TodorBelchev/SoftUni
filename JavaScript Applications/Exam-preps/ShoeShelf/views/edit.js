import { editShoeReq, getShoeById } from '../data/requests.js';
import { getUserData } from '../data/userData.js';
import { html } from '../node_modules/lit-html/lit-html.js';
import { until } from '../node_modules/lit-html/directives/until.js';
import { footerView } from './footer.js';
import { navigationView } from './navigation.js';
import { loading } from './loading.js';

export const editPage = async (ctx) => {
    ctx.render(until(populateTemplate(ctx), loading(ctx)));
}

const populateTemplate = async (ctx) => {
    const shoe = await getShoeById(ctx.params.id);

    return editTemplate(ctx, shoe);
};

const editTemplate = (ctx, shoe, errorMsg) => html`
${navigationView(ctx)}
<main>
    <h1>Edit Offer</h1>
    <p class="message"></p>

    ${errorMsg ? html`<div class="error">${errorMsg}</div>` : ''}
    <form @submit=${(e)=> editShoe(e, ctx, shoe)}>
        <div>
            <input type="text" placeholder="Name..." name="name" .value=${shoe.name}>
        </div>
        <div>
            <input type="text" placeholder="Price..." name="price" .value=${shoe.price}>
        </div>
        <div>
            <input type="text" placeholder="Image url..." name="img" .value=${shoe.img}>
        </div>
        <div>
            <textarea placeholder="Give us some description about this offer..." name="description"
                .value=${shoe.description}></textarea>
        </div>
        <div>
            <input type="text" placeholder="Brand..." name="brand" .value=${shoe.brand}>
        </div>
        <div>
            <button>Edit</button>
        </div>
    </form>
</main>
${footerView()}`;

const editShoe = async (e, ctx, shoe) => {
    e.preventDefault();

    const userData = getUserData();
    const formData = new FormData(e.target);
    const name = formData.get('name').trim();
    const price = formData.get('price').trim();
    const img = formData.get('img').trim();
    const description = formData.get('description').trim();
    const brand = formData.get('brand').trim();

    if (name === '' || price === '' || img === '' || description === '' || brand === '') {
        ctx.render(editTemplate(ctx, 'All fields are required!'));
        return;
    }

    try {
        const response = await editShoeReq(shoe._id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify({ name, price, img, description, brand, bought: shoe.bought, creator: userData.email })
        });
        ctx.page.redirect('/');
    } catch (error) {
        ctx.render(createTemplate(ctx, error.message));
        return;
    }
}