import { html } from '../node_modules/lit-html/lit-html.js';
import { navigationView } from './navigationView.js';

export const homeView = (ctx) => html`
    ${navigationView(ctx)}
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System ${ctx.userData ? html`${ctx.userData.email}` : html``}</h1>
                <p>Select furniture from the catalog to view details.</p>
            </div>
        </div>
        <div class="row space-top">
            ${ctx.furniture.map(furnitureCardView)}
        </div>
    </div>`;

export const furnitureCardView = (f) => html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src="${f.img}" />
                <p>${f.description}</p>
                <footer>
                    <p>Price: <span>${f.price} $</span></p>
                </footer>
                <div>
                    <a href="/details/${f._id}" class="btn btn-info">Details</a>
                </div>
            </div>
        </div>
    </div>`;