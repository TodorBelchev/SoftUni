import { html } from '../node_modules/lit-html/lit-html.js';
import { until } from '../node_modules/lit-html/directives/until.js';
import { navigationView } from './navigation.js';
import { footerView } from './footer.js';
import { getUserData } from '../data/userData.js';
import { getShoes } from '../data/requests.js';
import { loading } from './loading.js';

export const homeView = async (ctx) => {
    ctx.render(until(populateTemplate(ctx), loading(ctx)));
};

const populateTemplate = async (ctx) => {
    const userData = getUserData();
    const shoes = Object.values(await getShoes()).sort((a, b) => b.bought.length - a.bought.length);

    return homeTemplate(ctx, shoes, userData);
};

const homeTemplate = async (ctx, shoes, userData) => html`
        ${navigationView(ctx)}
        <main>
            ${userData ? userTemplate(ctx, shoes) : guestHomeTemplate()}
        </main>
        ${footerView()}`;

const userTemplate = (ctx, shoes) => html`
        ${shoes.length > 0 ? 
            html`
            <div class="shoes">
                ${shoes.map((x) => shoeCardTemplate(x, ctx))}
            </div>` : 
            html`<div class="noShoes">No shoes to display. Be the first to create a new offer ...</div>`}`;

const guestHomeTemplate = () => html`
<div class="container">
    <div class="about-us">
        <div>
            <img src="../public/shoes.jpg" alt="">
            <img src="../public/shoes2.jpg" alt="">
        </div>
        <p>
            <a href="/register">Register Now</a> and Try it!
        </p>
    </div>
</div>`;

const shoeCardTemplate = (shoe, ctx) => html`
<div class="shoe" @click=${(e) =>ctx.page.redirect(`/details/${shoe._id}`)}>
    <img src=${shoe.img}>
    <h3>${shoe.name}</h3>
    <a>Buy it for $${shoe.price}</a>
</div>`;