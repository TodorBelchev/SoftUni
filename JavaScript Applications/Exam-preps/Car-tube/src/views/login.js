import { html } from '../../node_modules/lit-html/lit-html.js';

import { loginUser } from '../data/requests.js';
import { saveUserData } from '../data/userData.js';

const template = (onSubmit) => html`
<section id="login">
    <div class="container">
        <form @submit=${onSubmit} id="login-form">
            <h1>Login</h1>
            <p>Please enter your credentials.</p>
            <hr>

            <p>Username</p>
            <input placeholder="Enter Username" name="username" type="text">

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn" value="Login">
        </form>
        <div class="signin">
            <p>Dont have an account?
                <a href="/register">Sign up</a>.
            </p>
        </div>
    </div>
</section>`;

export const loginPage = (ctx) => {
    ctx.render(template(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get('username').trim();
        const password = formData.get('password').trim();

        if (username === '' || password === '') {
            return alert('All fields are required!');
        }

        const response = await loginUser({ username, password });
        saveUserData({ token: response.accessToken, username: response.username, id: response._id });
        ctx.page.redirect('/listings');
    }
}