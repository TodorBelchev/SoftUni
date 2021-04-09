import { html } from '../node_modules/lit-html/lit-html.js';

import { getMovies } from '../data/requests.js';
import { buyMovie } from '../utils.js';
import { footer } from './footer.js';
import { navBar } from './navbar.js';

export const cinemaPage = async (ctx) => {
    const queryGenre = ctx.querystring.split('=')[1];
    let movies = await getMovies();
    if (queryGenre) {
        movies = movies.filter(x => x.genres.includes(queryGenre));
    }
    ctx.render(cinemaTemplate(ctx, movies, onSubmit));

    function onSubmit(e) {
        e.preventDefault();
        const genre = e.target.querySelector('input[type="text"]').value.trim();
        ctx.page.redirect('/cinema?seach=' + genre);
    }
};

const cinemaTemplate = (ctx, movies, onSubmit) => html`
${navBar(ctx)}
<div id="cinema">
    <h1>All Movies</h1>
    <form @submit=${onSubmit}>
        <label>Search genre:</label>
        <input type="text" name="search">
        <input type="submit" value="Search">
    </form>
    <div class="movies">
        ${movies.length > 0 ? 
            movies.map((x) => movieTemplate(x, ctx)) : ''}
    </div>
    ${movies.length === 0 ? html`<p>No movies at cinema yet</p>` : ''}
</div>
${footer()}`;

const movieTemplate = (movie, ctx) => html`
<div class="movie">
    <h2>Title: ${movie.title}</h2>
    <img src=${movie.imageUrl}>
    <p>Available Tickets: ${movie.tickets}</p><button><a href="javascript:void(0)" @click=${() => buyMovie(movie, ctx.userData.token, '/cinema')}>Buy Ticket</a></button>
    <button @click=${() => ctx.page.redirect('/details/' + movie._id)}><a href="/details/${movie._id}">Details</a></button>
</div>`;