import { html } from '../../node_modules/lit-html/lit-html.js';
import { editMeme, getMemeById } from '../data/requests.js';
import { notify } from '../notification.js';
import { navBar } from './navbar.js';

export const editPage = async (ctx) => {
    const meme = await getMemeById(ctx.params.id);
    ctx.render(editTemplate(ctx, meme, onSubmit));

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

            await editMeme(meme._id, { title, description, imageUrl }, ctx.userData.token);

            ctx.page.redirect('/details/' + meme._id);
        } catch (error) {
            notify(error.message);
        }
    }
}

const editTemplate = (ctx, meme, onSubmit) => html`
${navBar(ctx)}
<main>
    <section id="edit-meme">
        <form @submit=${onSubmit} id="edit-form">
            <h1>Edit Meme</h1>
            <div class="container">
                <label for="title">Title</label>
                <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title}>
                <label for="description">Description</label>
                <textarea id="description" placeholder="Enter Description"
                    name="description">${meme.description}</textarea>
                <label for="imageUrl">Image Url</label>
                <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl"
                    .value=${meme.imageUrl}>
                <input type="submit" class="registerbtn button" value="Edit Meme">
            </div>
        </form>
    </section>
</main>`;