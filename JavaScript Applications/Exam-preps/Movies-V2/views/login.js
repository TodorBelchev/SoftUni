import { html } from '../node_modules/lit-html/lit-html.js';

import { loginUser } from '../data/requests.js';
import { saveUserData } from '../data/userData.js';
import { footer } from './footer.js';
import { navBar } from './navbar.js';

export const loginPage = (ctx) => {
    ctx.render(loginTemplate(ctx, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        if (email === '' || password === '') {
            return alert('All fields are required!');
        }


        const response = await loginUser({ email, password });
        saveUserData({ email: response.email, token: response.accessToken, id: response._id });
        ctx.page.redirect('/cinema');
    }
}

const loginTemplate = (ctx, onSubmit) => html`
${navBar(ctx)}
<div id="loginForm">
    <h1>Login</h1>
    <form @submit=${onSubmit}>
        <label>Email</label>
        <input type="text" name="email" id="loginUsername">
        <label>Password</label>
        <input type="password" name="password" id="loginPassword">
        <input type="submit" value="Login">
    </form>
</div>
${footer()}`;