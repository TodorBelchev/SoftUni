import { html } from '../node_modules/lit-html/lit-html.js';
import { navigationView } from './navigationView.js';
import { footerView } from './footerView.js';
import { archive } from '../controllers/archive.js';
import { like } from '../controllers/like.js';
import { notificationView } from './notificationView.js';

export const detailsView = (ctx) => html`
    ${navigationView(ctx)}
    ${notificationView()}
    <div class="row form-layout p-5">
        <div class="col-md-12">
            <div class="recepieInfo">
                <div class="detailsFoodImage">
                    <img src=${ctx.recipe.img} alt="">
                </div>
                <div class="infoPack">
                    <h3 class="my-3">${ctx.recipe.meal}</h3>
                    <p class="prep-method">${ctx.recipe.prepMethod}</p>
                    <p class="description">${ctx.recipe.description}</p>
                </div>
                <div class="actions">
                    ${ctx.recipe._ownerId === ctx.userData._id ?
                        html`
                            <a class="btn btn-danger" href="/archive/${ctx.recipe._id}" @click=${(e) =>{ archive(e, ctx) }}>Archive</a>
                            <a class="btn btn-info" href="/edit/${ctx.recipe._id}">Edit</a>` :
                        html`<a class="btn btn-success" href="like/${ctx.recipe._id}" @click=${(e) => { like(e, ctx) }}>${ctx.recipe.likes.length - 1} likes</a>`}
                </div>
            </div>
            <div class="detailsIngredients">
                <h3 class="my-3 ingredient">Ingredients</h3>
                <ul>${ctx.recipe.ingredients.map(x => html`<li>${x}</li>`)}</ul>
            </div>
        </div>
    </div>
    ${footerView()}`;
