import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import { getUserData } from './data/userData.js';

import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { profilePage } from './views/profile.js';
import { registerPage } from './views/register.js';

const root = document.getElementById('root');

page('/', decorateContext, loggedGuard, homePage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/catalog', decorateContext, catalogPage);
page('/details/:id', decorateContext, detailsPage);
page('/create', decorateContext, createPage);
page('/edit/:id', decorateContext, editPage);
page('/profile', decorateContext, profilePage);

page();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    const userData = getUserData();
    userData !== null ? ctx.userData = userData : '';
    next();
}

function loggedGuard(ctx, next) {
    ctx.userData ? ctx.page.redirect('/catalog') : '';
    next();
}