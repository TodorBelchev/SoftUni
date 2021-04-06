import { html } from '../../node_modules/lit-html/lit-html.js';

import { getArticleById, deleteArticle as delArticle } from '../data/requests.js';

const template = (article, isOwner, deleteArticle) => html`
<section id="details-page" class="content details">
    <h1>${article.title}</h1>

    <div class="details-content">
        <strong>Published in category ${article.category}</strong>
        <p>${article.content}</p>

        <div class="buttons">

            ${isOwner ? html`
            <a @click=${deleteArticle} href="javascript:void(0)" class="btn delete">Delete</a>
            <a href="/edit/${article._id}" class="btn edit">Edit</a>` : ''}

            <a href="/" class="btn edit">Back</a>
        </div>
    </div>
</section>`;

export const detailsPage = async (ctx) => {
    const article = await getArticleById(ctx.params.id);
    let isOwner = false;
    if (ctx.userData) {
        isOwner = article._ownerId === ctx.userData.id;
    }
    ctx.render(template(article, isOwner, deleteArticle));

    async function deleteArticle() {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            await delArticle(article._id, ctx.userData.token);
            ctx.page.redirect('/');
        }
    }
}