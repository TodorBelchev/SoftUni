import { html } from '../node_modules/lit-html/lit-html.js';

import { addMovie } from '../data/requests.js';
import { footer } from './footer.js';
import { navBar } from './navbar.js';

export const addPage = (ctx) => {
    ctx.render(addTemplate(ctx, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        const title = formData.get('title').trim();
        const imageUrl = formData.get('imageUrl').trim();
        const description = formData.get('description').trim();
        const genres = formData.get('genres').split(' ').map(x => x.trim());
        const tickets = formData.get('tickets');

        if (title === '' || imageUrl === '' || description === '' || genres.length === 0 || !tickets) {
            return alert('All fields are required!');
        }

        await addMovie({ title, imageUrl, description, genres, tickets: Number(tickets), creator: ctx.userData.id, }, ctx.userData.token);
        ctx.page.redirect('/cinema');
    }
};

const addTemplate = (ctx, onSubmit) => html`
${navBar(ctx)}
<div id="addMovie">
    <h1>Create movie</h1>
    <form @submit=${onSubmit}>
        <label>Title</label>
        <input type="text" name="title" id="createTitle">
        <label>Image Url</label>
        <input type="text" name="imageUrl" id="createImage">
        <label>Description</label>
        <textarea type="text" name="description" id="createDescription"></textarea>
        <label>Genres</label>
        <input type="text" name="genres" id="createGenres">
        <label>Available Tickets</label>
        <input type="number" name="tickets" id="createTickets">
        <input type="submit" value="Create">
    </form>
</div>
${footer()}`;
