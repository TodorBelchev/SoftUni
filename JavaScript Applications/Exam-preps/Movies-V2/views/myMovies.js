import { html } from '../node_modules/lit-html/lit-html.js';

import { getMovies } from '../data/requests.js';
import { footer } from './footer.js';
import { navBar } from './navbar.js';
import { buyMovie } from '../utils.js';

export const myMoviesPage = async (ctx) => {
    const myMovies = (await getMovies()).filter(x => x.creator === ctx.userData.id);
    ctx.render(myMoviesTemplate(ctx, myMovies, buyMovie));
};

const myMoviesTemplate = (ctx, movies) => html`
${navBar(ctx)}
<div id="myMovies">
    <h1>My Movies</h1>
    <div class="movies">
        ${movies ? movies.map((x) => movieTemplate(x, ctx)) : ''}
    </div>
    ${movies ? '' : html`<p>No movies created</p>`}
</div>
${footer()}`;

const movieTemplate = (movie, ctx) => html`
<div class="movie">
    <h2>Title: ${movie.title}</h2>
    <img src=${movie.imageUrl}>
    <p>Available Tickets: ${movie.tickets}</p>
    <div class="btn-group">
        <button><a href="/edit/${movie._id}">Edit</a></button>
        <button><a href="/delete/${movie._id}">Delete</a></button>
        <button><a href="javascript:void(0)" @click=${() => buyMovie(movie, ctx.userData.token, '/my-movies')}>Buy Ticket</a></button>
        <button><a href="/details/${movie._id}">Details</a></button>
    </div>
</div>`;