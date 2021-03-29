import page from './node_modules/page/page.mjs';
import { render } from './node_modules/lit-html/lit-html.js';

import { getUserData } from './data/userData.js';
import { getAllTeams,
    getMyTeams,
    getPendingRequests,
    getTeamDetails,
    getTeamMembers,
    getTeamMembersCount,
    getMyCreatedTeams, 
    getOneTeamsPage} from './data/requests.js';

import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';
import { myTeamsView } from './views/myTeamsView.js';
import { allTeamsView } from './views/allTeamsView.js';
import { createView } from './views/createView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';

const root = document.getElementById('content');
const ctx = {};

page('/', async () => {
    ctx.userData = getUserData();
    render(homeView(ctx), root);
});

page('/login', async () => {
    render(loginView(ctx), root);
});

page('/register', async () => {
    render(registerView(ctx), root);
});

page('/create', async () => {
    ctx.userData = getUserData();
    render(createView(ctx), root);
});

page('/my-teams', async () => {
    ctx.userData = getUserData();
    ctx.myTeams = await getMyTeams(ctx.userData.id);
    render(myTeamsView(ctx), root);
});

page('/teams', async (pageCtx) => {
    ctx.userData = getUserData();
    ctx.pageCtx = pageCtx;
    if (ctx.userData) {
        ctx.myTeams = await getMyCreatedTeams(ctx.userData.id);
    }
    ctx.allTeams = await getAllTeams();
    ctx.onePage = await getOneTeamsPage();
    ctx.pages = Math.ceil(ctx.allTeams.length / 3);
    for (const team of ctx.allTeams) {
        team.membersCount = await getTeamMembersCount(team._id);
    }
    let page = pageCtx.querystring.split('=')[1];
    render(await allTeamsView(ctx, page), root);
});

page('/details/:id', async (e) => {
    const id = e.params.id;
    ctx.userData = getUserData();
    ctx.team = await getTeamDetails(id);
    ctx.members = await getTeamMembers(id);
    ctx.requests = await getPendingRequests(id);
    render(detailsView(ctx), root);
});

page('/edit/:id', async (e) => {
    const id = e.params.id;
    ctx.userData = getUserData();
    ctx.team = await getTeamDetails(id);
    render(editView(ctx), root);
});

page();