import { getRecipes } from './data/requests.js';
import { getUserData } from './data/userData.js';
import { render } from './node_modules/lit-html/lit-html.js';
import page from './node_modules/page/page.mjs';
import { detailsView } from './views/detailsView.js';
import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';
import { shareView } from './views/shareView.js';
import { editView } from './views/editView.js';

const root = document.getElementById('rooter');
const ctx = {};

page('/', async () => {
    const userData = getUserData();
    ctx.userData = userData;
    const recipes = await getRecipes();
    if (recipes) {
        ctx.recipes = Object.entries(recipes).map(([k, v]) => Object.assign(v, { _id: k }));
    }
    render(homeView(ctx), root);
});

page('/register', async () => {
    render(registerView(ctx), root);
});

page('/login', async () => {
    render(loginView(ctx), root);
});

page('/share', async () => {
    render(shareView(ctx), root);
});

page('/details/:id', async (e) => {
    const id = e.params.id
    ctx.recipe = ctx.recipes.find(x => x._id === id);
    render(detailsView(ctx), root);
});

page('/edit/:id', async (e) => {
    const id = e.params.id
    ctx.recipe = ctx.recipes.find(x => x._id === id);
    render(editView(ctx), root);
});

page();