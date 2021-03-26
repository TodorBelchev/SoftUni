import page from './node_modules/page/page.mjs';
import { render } from './node_modules/lit-html/lit-html.js';
import { getFurniture, getFurnitureByOwner, getFurnitureDetails } from './data/requests.js';
import { getUserData } from './data/userData.js';
import { homeView } from './views/homeView.js';
import { registerView } from './views/registerView.js';
import { loginView } from './views/loginView.js';
import { createView } from './views/createView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import { myFurnitureView } from './views/myFurniture.js';
import { redirect } from './controllers/redirect.js';

const root = document.getElementById('root');

page('/', async () => {
    const ctx = {};
    const userData = await getUserData();
    try {
        const furniture = await getFurniture();
        ctx.userData = userData;
        ctx.furniture = furniture;
        ctx.home = true;
        render(homeView(ctx), root);
    } catch (error) { return; }
});

page('/register', async () => {
    const ctx = {};
    const userData = await getUserData();
    ctx.userData = userData;
    ctx.register = true;
    render(registerView(ctx), root);
});

page('/login', async () => {
    const ctx = {};
    const userData = await getUserData();
    ctx.userData = userData;
    ctx.login = true;
    render(loginView(ctx), root);
});

page('/create', async () => {
    const ctx = {};
    const userData = await getUserData();
    if (!userData) {
        redirect('/');
    }
    ctx.userData = userData;
    ctx.create = true;
    render(createView(ctx), root);
});

page('/details/:id', async (e) => {
    const id = e.path.split('/').pop();
    const ctx = {};
    const userData = await getUserData();
    try {
        const furnitureDetails = await getFurnitureDetails(id);
        ctx.details = furnitureDetails;
        ctx.userData = userData;
        render(detailsView(ctx), root);
    } catch (error) {
        console.log(error);
        return;
    }
});

page('/edit/:id', async (e) => {
    const id = e.path.split('/').pop();
    const ctx = {};
    const userData = await getUserData();
    try {
        const furnitureDetails = await getFurnitureDetails(id);
        ctx.details = furnitureDetails;
        ctx.userData = userData;
        render(editView(ctx), root);
    } catch (error) { return; }
});

page('/profile/:id', async () => {
    const ctx = {};
    const userData = await getUserData();
    try {
        const furniture = await getFurnitureByOwner(userData._id);
        ctx.userData = userData;
        ctx.furniture = furniture;
        ctx.profile = true;
        render(myFurnitureView(ctx), root);
    } catch (error) { return; }
});

page();