import { buyShoeReq, deleteShoeReq, getShoeById } from '../data/requests.js';
import { getUserData } from '../data/userData.js';
import { html } from '../node_modules/lit-html/lit-html.js';
import { until } from '../node_modules/lit-html/directives/until.js';
import { footerView } from './footer.js';
import { navigationView } from './navigation.js';
import { loading } from './loading.js';

export const detailsPage = async (ctx) => {
    ctx.render(until(populateTemplate(ctx), loading(ctx)));
};

const populateTemplate = async (ctx) => {
    const userData = getUserData();
    const shoe = await getShoeById(ctx.params.id);

    return detailsTemplate(ctx, shoe, userData);
};

const detailsTemplate = (ctx, shoe, userData) => html`
${navigationView(ctx)}
<main>
    <div class="offer-details">
        <h1>${shoe.brand} ${shoe.name}</h1>
        <div class="info">
            <img src="${shoe.img}"
                alt="">
            <div class="description">${shoe.description}
                <br>
                <br>
                <p class="price">$${shoe.price}</p>
            </div>
        </div>
        <div class="actions">
            ${shoe.creator === userData.email ? 
                html`
                    <a href="/edit/${shoe._id}">Edit</a>
                    <a href="javascript:void(0)" @click=${(e) => del(e, ctx, userData, shoe._id)}>Delete</a>` : 
                shoe.bought.includes(userData.email) ? 
                    html`<span>You bought it</span>` : 
                    html`<a @click=${(e) => buyShoe(e, ctx, userData, shoe)}>Buy</a>`}
        </div>
    </div>
</main>
${footerView()}`;

const buyShoe = async (e, ctx, userData, shoe) => {
    e.preventDefault();

    const obj = {
        name: shoe.name,
        brand: shoe.brand,
        description: shoe.description,
        price: shoe.price,
        bought: shoe.bought,
        img: shoe.img,
        creator: shoe.creator
    }

    obj.bought.push(userData.email);

    try {
        await buyShoeReq(shoe._id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify(obj)
        });
        ctx.page.redirect('/details/' + shoe._id);
    } catch (error) {
        console.log(error.message);
    }
}

const del = async (e, ctx, userData, id) => {
    e.preventDefault();

    try {
        await deleteShoeReq(id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            }
        });
        ctx.page.redirect('/');
    } catch (error) {
        console.log(error.message);
    }
}