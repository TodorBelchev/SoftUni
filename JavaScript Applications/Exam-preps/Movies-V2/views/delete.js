import { html } from '../node_modules/lit-html/lit-html.js';

import { getMovieById, deleteMovie } from '../data/requests.js';
import { footer } from './footer.js';
import { navBar } from './navbar.js';

export const deletePage = async (ctx) => {
    const movie = await getMovieById(ctx.params.id);
    ctx.render(deleteTemplate(ctx, movie, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        await deleteMovie(movie._id);
        ctx.page.redirect('/cinema');
    }
};

const deleteTemplate = (ctx, movie, onSubmit) => html`
${navBar(ctx)}
<div id="deleteMovie">
    <h1>Delete movie</h1>
    <form @submit=${onSubmit}>
        <label>Title</label>
        <input type="text" name="title" value=${movie.title} disabled>
        <label>Image Url</label>
        <input type="text" name="imageUrl" .value=${movie.imageUrl} disabled>
        <label>Description</label>
        <textarea type="text" name="description" disabled>${movie.description}</textarea>
        <label>Genres</label>
        <input type="text" name="genres" .value=${movie.genres.join(' ')} disabled>
        <label>Available Tickets</label>
        <input type="number" name="tickets" .value=${movie.tickets} disabled>
        <input type="submit" value="Delete">
    </form>
</div>
${footer()}`;