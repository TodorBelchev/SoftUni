import { html } from '../node_modules/lit-html/lit-html.js';

import { registerUser } from '../data/requests.js';
import { saveUserData } from '../data/userData.js';
import { footer } from './footer.js';
import { navBar } from './navbar.js';

export const registerPage = (ctx) => {
    ctx.render(registerTemplate(ctx, onSubmit)); 

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repeatPassword = formData.get('repeatPassword').trim();

        if (email === '' || password === '' || repeatPassword === '') {
            return alert('All fields are required!');
        }

        if (password !== repeatPassword) {
            return alert('Passwords don`t match!');
        }

        const response = await registerUser({email, password});
        saveUserData({email: response.email, token: response.accessToken, id: response._id});
        ctx.page.redirect('/cinema');
    }
}

const registerTemplate = (ctx, onSubmit) => html`
${navBar(ctx)}
<div id="registerForm">
    <h1>Register</h1>
    <form @submit=${onSubmit}>
        <label>Email</label>
        <input type="text" name="email" id="registerUsername">
        <label>Password</label>
        <input type="password" name="password" id="registerPassword">
        <label>Repeat Password</label>
        <input type="password" name="repeatPassword" id="registerRepeatPassword">
        <input type="submit" value="Register">
    </form>
</div>
${footer()}`;