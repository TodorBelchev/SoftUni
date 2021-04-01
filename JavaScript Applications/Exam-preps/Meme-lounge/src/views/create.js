import { html } from '../../node_modules/lit-html/lit-html.js';
import { createMeme } from '../data/requests.js';
import { notify } from '../notification.js';
import { navBar } from './navbar.js';

export const createPage = (ctx) => {
    ctx.render(createTemplate(ctx, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const title = formData.get('title').trim();
        const description = formData.get('description').trim();
        const imageUrl = formData.get('imageUrl').trim();

        try {
            if (title === '' || description === '' || imageUrl === '') {
                throw new Error('All fields are required!');
            }

            await createMeme({ title, description, imageUrl }, ctx.userData.token);

            ctx.page.redirect('/catalog');
        } catch (error) {
            notify(error.message);
        }
    }
}

const createTemplate = (ctx, onSubmit) => html`
${navBar(ctx)}
<main>
    <section id="create-meme">
        <form @submit=${onSubmit} id="create-form">
            <div class="container">
                <h1>Create Meme</h1>
                <label for="title">Title</label>
                <input id="title" type="text" placeholder="Enter Title" name="title">
                <label for="description">Description</label>
                <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                <label for="imageUrl">Meme Image</label>
                <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
                <input type="submit" class="registerbtn button" value="Create Meme">
            </div>
        </form>
    </section>
</main>`;