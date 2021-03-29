import { logout } from '../controllers/logout.js';
import { html } from '../node_modules/lit-html/lit-html.js';

export const navigationView = (ctx) => html`
    <header id="titlebar" class="layout">
        <a href="/" class="site-logo">Team Manager</a>
        <nav>
            <a href="/teams?page=1" class="action">Browse Teams</a>
            ${ctx.userData ?
                html`
                    <a href="/my-teams" class="action">My Teams</a>
                    <a href="/logout" class="action" @click=${(e) => { logout(e, ctx) }}>Logout</a>` :
                html`
                    <a href="/login" class="action">Login</a>
                    <a href="/register" class="action">Register</a>`}    
        </nav>
    </header>`;