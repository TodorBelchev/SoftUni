import { createShoeReq } from '../data/requests.js';
import { getUserData } from '../data/userData.js';
import { html } from '../node_modules/lit-html/lit-html.js';
import { footerView } from './footer.js';
import { navigationView } from './navigation.js';

export const createPage = (ctx) => {
    ctx.render(createTemplate(ctx));
}

const createTemplate = (ctx, errorMsg) => html`
${navigationView(ctx)}
<main>
    <h1>Create New Offer</h1>
    <p class="message"></p>

    ${errorMsg ? html`<div class="error">${errorMsg}</div>` : ''}
    <form @submit=${(e)=> createShoe(e, ctx)}>
        <div>
            <input type="text" placeholder="Name..." name="name">
        </div>
        <div>
            <input type="text" placeholder="Price..." name="price">
        </div>
        <div>
            <input type="text" placeholder="Image url..." name="img">
        </div>
        <div>
            <textarea placeholder="Give us some description about this offer..." name="description"></textarea>
        </div>
        <div>
            <input type="text" placeholder="Brand..." name="brand">
        </div>
        <div>
            <button>Create</button>
        </div>
    </form>
</main>
${footerView()}`;

const createShoe = async (e, ctx) => {
    e.preventDefault();

    const userData = getUserData();
    const formData = new FormData(e.target);
    const name = formData.get('name').trim();
    const price = formData.get('price').trim();
    const img = formData.get('img').trim();
    const description = formData.get('description').trim();
    const brand = formData.get('brand').trim();

    if (name === '' || price === '' || img === '' || description === '' || brand === '') {
        ctx.render(createTemplate(ctx, 'All fields are required!'));
        return;
    }

    try {
        const response = await createShoeReq({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify({ name, price, img, description, brand, bought: [], creator: userData.email })
        });
        ctx.page.redirect('/');
    } catch (error) {
        ctx.render(createTemplate(ctx, error.message));
        return;
    }
}
