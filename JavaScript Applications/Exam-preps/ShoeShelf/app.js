import page from './node_modules/page/page.mjs';
import { render } from './node_modules/lit-html/lit-html.js';

import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';

const root = document.body;
const decorateContext = (ctx, next) => {
    ctx.render = (content) => render(content, root);
    next();
}

page('/', decorateContext, homeView);

page('/login', decorateContext, loginView);

page('/register', decorateContext, registerView);

page('/create', decorateContext, createPage);

page('/details/:id', decorateContext, detailsPage);

page('/edit/:id', decorateContext, editPage);

page();