import { logout } from '../controllers/logout.js';
import { html } from '../node_modules/lit-html/lit-html.js';

export const navigationView = (ctx) => html`
    <header>
        <h1><a href="/">Furniture Store</a></h1>
        <nav>
            <a id="catalogLink" href="/" class=${ctx.home ? 'active' : '' }>Dashboard</a>
            ${ctx.userData ? loggedNav(ctx) : guestNav(ctx)}
        </nav>
    </header>`;

const loggedNav = (ctx) => html`
    <div id="user">
        <a id="createLink" href="/create" class=${ctx.create ? 'active' : '' }>Create Furniture</a>
        <a id="profileLink" href="/profile/${ctx.userData._id}" class=${ctx.profile ? 'active' : '' }>My Publications</a>
        <a id="logoutBtn" href="javascript:void(0)" @click=${logout}>Logout</a>
    </div>`;

const guestNav = (ctx) => html`
    <div id="guest">
        <a id="loginLink" href="/login" class=${ctx.login ? 'active' : '' }>Login</a>
        <a id="registerLink" href="/register" class=${ctx.register ? 'active' : '' }>Register</a>
    </div>`;