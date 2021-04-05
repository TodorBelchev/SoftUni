import { html } from '../../node_modules/lit-html/lit-html.js';

import { registerUser } from '../data/requests.js';
import { saveUserData } from '../data/userData.js';

const template = (onSubmit) => html`
<section id="register">
    <div class="container">
        <form @submit=${onSubmit} id="register-form">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>

            <p>Username</p>
            <input type="text" placeholder="Enter Username" name="username" required>

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password" required>

            <p>Repeat Password</p>
            <input type="password" placeholder="Repeat Password" name="repeatPass" required>
            <hr>

            <input type="submit" class="registerbtn" value="Register">
        </form>
        <div class="signin">
            <p>Already have an account?
                <a href="/login">Sign in</a>.
            </p>
        </div>
    </div>
</section>`;

export const registerPage = (ctx) => {
    ctx.render(template(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get('username').trim();
        const password = formData.get('password').trim();
        const repeatPass = formData.get('repeatPass').trim();

        if (username === '' || password === '') {
            return alert('All fields are required!');
        }

        if (password !== repeatPass) {
            return alert('Passwords don`t match!');
        }

        const response = await registerUser({ username, password });
        saveUserData({ token: response.accessToken, username: response.username, id: response._id });
        ctx.page.redirect('/listings');
    }
}