import { html } from '../node_modules/lit-html/lit-html.js';
import { navigationView } from './navigationView.js';
import { furnitureCardView } from './homeView.js';

export const myFurnitureView = (ctx) => html`
    ${navigationView(ctx)}
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>${ctx.userData.email}\`s furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
            ${ctx.furniture.map(furnitureCardView)}
        </div>
    </div>`;