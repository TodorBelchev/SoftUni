import { html } from '../../node_modules/lit-html/lit-html.js';

import { registerUser } from '../data/requests.js';
import { saveUserData } from '../data/userData.js';

const template = (onSubmit) => html`
<section id="register-page" class="content auth">
    <h1>Register</h1>

    <form id="register" @submit=${onSubmit}>
        <fieldset>
            <blockquote>Knowledge is not simply another commodity. On the contrary. Knowledge is never used up.
                It
                increases by diffusion and grows by dispersion.</blockquote>
            <p class="field email">
                <label for="register-email">Email:</label>
                <input type="email" id="register-email" name="email" placeholder="maria@email.com">
            </p>
            <p class="field password">
                <label for="register-pass">Password:</label>
                <input type="password" name="password" id="register-pass">
            </p>
            <p class="field password">
                <label for="register-rep-pass">Repeat password:</label>
                <input type="password" name="rep-pass" id="register-rep-pass">
            </p>
            <p class="field submit">
                <input class="btn submit" type="submit" value="Register">
            </p>
            <p class="field">
                <span>If you already have profile click <a href="#">here</a></span>
            </p>
        </fieldset>
    </form>
</section>`;

export const registerPage = (ctx) => {
    ctx.render(template(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repeatPass = formData.get('rep-pass').trim();

        if (email === '' || password === '') {
            return alert('All fields are required!');
        }

        if (password !== repeatPass) {
            return alert('Passwords don`t match!');
        }

        const response = await registerUser({ email, password });
        saveUserData({ token: response.accessToken, email: response.email, id: response._id });
        ctx.page.redirect('/');
    }
}