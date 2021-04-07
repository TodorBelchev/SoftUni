import { html } from '../node_modules/lit-html/lit-html.js';
import { logout } from '../controllers/logout.js';

export const navigationView = (ctx) => html`
    <header class="masthead mb-auto">
        <div class="inner">
            <h3 class="masthead-brand">CookUni</h3>
            <nav class="nav nav-masthead justify-content-center">
                <a class="nav-link" href="/">Home</a>
                ${ctx.userData ? userNav(ctx.userData) : guestNav()}
            </nav>
        </div>
    </header>`;

const userNav = (userData) => html`
        <a class="nav-link" href="/">Welcome, ${userData.email}!</a>
        <a class="nav-link" href="/share">Share recipe</a>
        <a class="nav-link" href="javascript:void(0)" @click=${logout}>Logout</a>`;


const guestNav = () => html`
        <a class="nav-link" href="/login">Login</a>
        <a class="nav-link" href="/register">Register</a>`;