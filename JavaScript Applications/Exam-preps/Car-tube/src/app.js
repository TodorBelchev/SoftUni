import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { logoutUser } from './data/requests.js';

import { getUserData, removeUserData } from './data/userData.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { listingsPage } from './views/listings.js';
import { loginPage } from './views/login.js';
import { myListingsPage } from './views/myListings.js';
import { registerPage } from './views/register.js';
import { searchPage } from './views/search.js';

const main = document.getElementById('site-content');

page('/', decorateContext, homePage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/listings', decorateContext, listingsPage);
page('/create', decorateContext, createPage);
page('/search', decorateContext, searchPage);
page('/my-listings', decorateContext, myListingsPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);

page();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    const userData = getUserData();
    userData !== null ? ctx.userData = userData : '';
    setupNav(userData);
    next();
}

function setupNav(userData) {
    if (userData !== null) {
        document.getElementById('welcome-msg').textContent = `Welcome ${userData.username}`;
        document.getElementById('profile').style.display = 'block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('profile').style.display = 'none';
        document.getElementById('guest').style.display = 'block';
    }
}

document.getElementById('logoutBtn').addEventListener('click', () => {
    const token = getUserData().token;
    logoutUser(token);
    removeUserData();
    page.redirect('/');
});