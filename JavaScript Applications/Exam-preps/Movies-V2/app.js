import { render } from './node_modules/lit-html/lit-html.js';
import page from './node_modules/page/page.mjs';

import { getUserData } from './data/userData.js';

import { homePage } from './views/home.js';
import { registerPage } from './views/register.js';
import { loginPage } from './views/login.js';
import { cinemaPage } from './views/cinema.js';
import { addPage } from './views/add.js';
import { detailsPage } from './views/details.js';
import { myMoviesPage } from './views/myMovies.js';
import { editPage } from './views/edit.js';
import { deletePage } from './views/delete.js';

const root = document.getElementById('container');

function decorateCtx(ctx, next) {
    ctx.render = (content) => render(content, root);
    const userData = getUserData();
    if (userData) {
        ctx.userData = userData;
    }
    next();
}

page('/', decorateCtx, homePage);

page('/register', decorateCtx, registerPage);

page('/login', decorateCtx, loginPage);

page('/cinema', decorateCtx, cinemaPage);

page('/add', decorateCtx, addPage);

page('/details/:id', decorateCtx, detailsPage);

page('/edit/:id', decorateCtx, editPage);

page('/delete/:id', decorateCtx, deletePage);

page('/my-movies', decorateCtx, myMoviesPage);

page();