import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMemes } from '../data/requests.js';
import { navBar } from './navbar.js';

export const catalogPage = async (ctx) => {
    const memes = await getMemes();
    ctx.render(catalogTemplate(ctx, memes));
};

const catalogTemplate = (ctx, memes) => html`
${navBar(ctx)}
<main>
    <section id="meme-feed">
        <h1>All Memes</h1>
        <div id="memes">
            ${memes.length > 0 ?
                memes.map(memeTemplate) :
                html`<p class="no-memes">No memes in database.</p>`}
        </div>
    </section>
</main>`;

const memeTemplate = (meme) => html`
<div class="meme">
    <div class="card">
        <div class="info">
            <p class="meme-title">${meme.title}</p>
            <img class="meme-image" alt="meme-img" src=${meme.imageUrl}>
        </div>
        <div id="data-buttons">
            <a class="button" href="/details/${meme._id}">Details</a>
        </div>
    </div>
</div>`;
