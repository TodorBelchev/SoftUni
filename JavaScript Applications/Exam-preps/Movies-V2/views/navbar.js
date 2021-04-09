import { logoutUser } from '../data/requests.js';
import { removeUserData } from '../data/userData.js';
import { html } from '../node_modules/lit-html/lit-html.js';

export const navBar = (ctx) => html`
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        ${ctx.userData ? 
            html`
                <li><a href="/cinema">Cinema</a></li>
                <li><a href="/add">Add Movie</a></li>
                <li><a href="/my-movies">My Movies</a></li>
                <li class="right"><a href="javascript:void(0)" @click=${(e) => logout(ctx)}>Logout</a></li>
                <li class="right">Welcome, ${ctx.userData.email}!</li>` : 
            html`
                <li class="right"><a href="/register">Register</a></li>
                <li class="right"><a href="/login">Login</a></li>`}
    </ul>
</nav>`;

async function logout(ctx) {
    await logoutUser(ctx.userData.token);
    removeUserData();
    ctx.page.redirect('/');
}