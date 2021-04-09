import { editMovie, getMovieById } from '../data/requests.js';
import { html } from '../node_modules/lit-html/lit-html.js';
import { footer } from './footer.js';
import { navBar } from './navbar.js';

export const editPage = async (ctx) => {
    const movie = await getMovieById(ctx.params.id);
    ctx.render(editTemplate(ctx, movie, onSubmit));

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

        await editMovie(movie._id, { title, imageUrl, description, genres, tickets: Number(tickets), creator: ctx.userData.id, }, ctx.userData.token);
        ctx.page.redirect('/cinema');
    }
};

const editTemplate = (ctx, movie, onSubmit) => html`
${navBar(ctx)}
<div id="editMovie">
    <h1>Edit movie</h1>
    <form @submit=${onSubmit}>
        <label>Title</label>
        <input type="text" name="title" .value=${movie.title} id="editTitle">
        <label>Image Url</label>
        <input type="text" name="imageUrl" id="editImage" .value=${movie.imageUrl}>
        <label>Description</label>
        <textarea type="text" id="editDescription" name="description">${movie.description}</textarea>
        <label>Genres</label>
        <input type="text" name="genres" .value=${movie.genres.join(' ')} id="editGenres">
        <label>Available Tickets</label>
        <input type="number" name="tickets" .value=${movie.tickets} id="editTickets">
        <input type="submit" value="Edit">
    </form>
</div>
${footer()}`;