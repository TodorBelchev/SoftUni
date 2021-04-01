import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteMeme, getMemeById } from '../data/requests.js';
import { navBar } from './navbar.js';

export const detailsPage = async (ctx) => {
    const meme = await getMemeById(ctx.params.id);
    ctx.render(detailsTemplate(ctx, meme, onDelete));

    async function onDelete() {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            await deleteMeme(ctx.params.id, ctx.userData.token);
            ctx.page.redirect('/catalog');
        }
        return;
    }
};

const detailsTemplate = (ctx, meme, onDelete) => html`
${navBar(ctx)}
<main>
    <section id="meme-details">
        <h1>Meme Title: ${meme.title}</h1>
        <div class="meme-details">
            <div class="meme-img">
                <img alt="meme-alt" src=${meme.imageUrl}>
            </div>
            <div class="meme-description">
                <h2>Meme Description</h2>
                <p>${meme.description}</p>

                ${ctx.userData ? ctx.userData.id === meme._ownerId ? html`
                <a class="button warning" href="/edit/${meme._id}">Edit</a>
                <button @click=${onDelete} class="button danger">Delete</button>` : '' : ''}

            </div>
        </div>
    </section>
</main>`;