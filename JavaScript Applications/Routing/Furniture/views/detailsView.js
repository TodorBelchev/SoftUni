import { deleteFurniture } from '../controllers/delete.js';
import { html } from '../node_modules/lit-html/lit-html.js';
import { navigationView } from './navigationView.js';

export const detailsView = (ctx) => html`
    ${navigationView(ctx)}
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        ${ctx.details.img.includes('www') ? html`<img src="${ctx.details.img}" />` : html`<img
                            src=".${ctx.details.img}" />`}
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${ctx.details.make}</span></p>
                <p>Model: <span>${ctx.details.model}</span></p>
                <p>Year: <span>${ctx.details.year}</span></p>
                <p>Description: <span>${ctx.details.description}</span></p>
                <p>Price: <span>${ctx.details.price}</span></p>
                ${ctx.details.material ? html`<p>Material: <span>${ctx.details.material}</span></p>` : html``}
                ${ctx.userData ? ctx.userData._id === ctx.details._ownerId ?
                    html`<div>
                        <a href="/edit/${ctx.details._id}" class="btn btn-info">Edit</a>
                        <a href="/delete/${ctx.details._id}" class="btn btn-red" @click=${(e) => {deleteFurniture(e, ctx.details._id, ctx.userData)}}>Delete</a>
                    </div>` :
                    html`` : ''}
            </div>
        </div>
    </div>`;