import { logoutUser } from '../data/requests.js';
import { getUserData, removeUserData } from '../data/userData.js';
import { html } from '../node_modules/lit-html/lit-html.js';

export const navigationView = (ctx) => {
    const userData = getUserData();
    return navigationTemplate(ctx, userData);
}

const navigationTemplate = (ctx, userData) => html`
<header>
    <nav>
        <ul>
            ${userData ? html`
            <li>
                <a href="/create">Create new offer</a>
            </li>` : ''}
            <li class="site-logo">Shoe</li>
            <li>
                <a href="/">
                    <img src="../public/sneakers.png" alt="">
                </a>
            </li>
            <li class="site-logo">Shelf</li>
            ${userData ? html`
            <li>Welcome, ${userData.email} |
                <a href="javascript:void(0)" @click=${(e)=> logout(e, ctx, userData)}>Logout</a>
            </li>`: ''}
        </ul>
    </nav>
</header>`;

async function logout(e, ctx, userData) {
    e.preventDefault();
    await logoutUser({
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.token
        }
    });
    removeUserData();
    ctx.page.redirect('/');
}