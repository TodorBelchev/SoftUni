import page from './node_modules/page/page.mjs';

import { editMovie } from './data/requests.js';

export const buyMovie = async (movie, token, redirectPath) => {
    if(movie.tickets === 0) {
        return alert('No tickets available!');
    }
    movie.tickets--;
    await editMovie(movie._id, movie, token);
    page.redirect(redirectPath);
}