import { html } from '../../node_modules/lit-html/lit-html.js';

import { getArticleById, editArticle } from '../data/requests.js';

const template = (article, onSubmit) => html`
<section id="edit-page" class="content">
    <h1>Edit Article</h1>

    <form id="edit" @submit=${onSubmit}>
        <fieldset>
            <p class="field title">
                <label for="title">Title:</label>
                <input type="text" name="title" id="title" placeholder="Enter article title" .value=${article.title}>
            </p>

            <p class="field category">
                <label for="category">Category:</label>
                <input type="text" name="category" id="category" placeholder="Enter article category"
                    .value=${article.category}>
            </p>
            <p class="field">
                <label for="content">Content:</label>
                <textarea name="content" id="content" .value=${article.content}></textarea>
            </p>

            <p class="field submit">
                <input class="btn submit" type="submit" value="Save Changes">
            </p>

        </fieldset>
    </form>
</section>`;

export const editPage = async (ctx) => {
    const article = await getArticleById(ctx.params.id);
    const categories = ['JavaScript', 'Java', 'C#', 'Python'];
    ctx.render(template(article, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const title = formData.get('title').trim();
        const category = formData.get('category').trim();
        const content = formData.get('content').trim();

        if (!title || !category || !content) {
            return alert('All fields are required!');
        }

        if (!categories.includes(category)) {
            return alert('Category must be JavaScript, Java, C# or Python!');
        }

        await editArticle(article._id, { title, category, content }, ctx.userData.token);
        ctx.page.redirect('/details/' + article._id);
    }
}