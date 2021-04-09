import { html } from '../node_modules/lit-html/lit-html.js';

import { getMovieById } from '../data/requests.js';
import { buyMovie } from '../utils.js';
import { footer } from './footer.js';
import { navBar } from './navbar.js';

export const detailsPage = async (ctx) => {
    const movie = await getMovieById(ctx.params.id);
    ctx.render(detailsTemplate(ctx, movie));
};

const detailsTemplate = (ctx, movie) => html`
${navBar(ctx)}
<div id="detailsMovie">
    <h1>Details</h1>
    <div class="movie">
        <h2>Title: ${movie.title}</h2>
        <img src=${movie.imageUrl}>
        <p>${movie.description}</p>
        <h2>Genres</h2>
        <ul class="genres">
            <li>${movie.genres.join(', ')}</li>
        </ul>
        <p>Available Tickets: ${movie.tickets}</p>
        <button><a href="javascript:void(0)" @click=${()=> buyMovie(movie, ctx.userData.token, '/details/' + movie._id)}>Buy Ticket</a></button>
    </div>
</div>
${footer()}`;