import { html } from '../../node_modules/lit-html/lit-html.js';
import { logoutUser } from '../data/requests.js';
import { removeUserData } from '../data/userData.js';

export const navBar = (ctx) => html`
<nav>
    <a href="/catalog">All Memes</a>
    ${ctx.userData ? 
        html`<div class="user">
            <a href="/create">Create Meme</a>
            <div class="profile">
                <span>Welcome, ${ctx.userData.email}</span>
                <a href="/profile">My Profile</a>
                <a @click=${(e) => logout(e, ctx)} href="javascript:void(0)">Logout</a>
            </div>
        </div>` :
        html`<div class="guest">
            <div class="profile">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>
            <a class="active" href="/catalog">Home Page</a>
        </div>`}

</nav>`;

const logout = async (e, ctx) => {
    await logoutUser(ctx.userData.token);
    removeUserData();
    ctx.page.redirect('/');
}