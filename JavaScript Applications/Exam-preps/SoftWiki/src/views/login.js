import { html } from '../../node_modules/lit-html/lit-html.js';

import { loginUser } from '../data/requests.js';
import { saveUserData } from '../data/userData.js';

const template = (onSubmit) => html`
<section id="login-page" class="content auth">
    <h1>Login</h1>

    <form id="login" @submit=${onSubmit}>
        <fieldset>
            <blockquote>Knowledge is like money: to be of value it must circulate, and in circulating it can
                increase in quantity and, hopefully, in value</blockquote>
            <p class="field email">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="maria@email.com">
            </p>
            <p class="field password">
                <label for="login-pass">Password:</label>
                <input type="password" id="login-pass" name="password">
            </p>
            <p class="field submit">
                <input class="btn submit" type="submit" value="Log in">
            </p>
            <p class="field">
                <span>If you don't have profile click <a href="#">here</a></span>
            </p>
        </fieldset>
    </form>
</section>`;

export const loginPage = (ctx) => {
    ctx.render(template(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        if (email === '' || password === '') {
            return alert('All fields are required!');
        }

        const response = await loginUser({ email, password });
        saveUserData({ token: response.accessToken, email: response.email, id: response._id });
        ctx.page.redirect('/');
    }
}