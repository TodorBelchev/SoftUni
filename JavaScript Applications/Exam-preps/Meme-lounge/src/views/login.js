import { html } from '../../node_modules/lit-html/lit-html.js';
import { loginUser } from '../data/requests.js';
import { saveUserData } from '../data/userData.js';
import { notify } from '../notification.js';
import { navBar } from './navbar.js';

export const loginPage = (ctx) => {
    ctx.render(loginTemplate(ctx, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        try {
            if (email === '' || password === '') {
                throw new Error('All fields are required!');
            }

            const response = await loginUser({ email, password });
            saveUserData({
                token: response.accessToken,
                email: response.email,
                gender: response.gender,
                username: response.username,
                id: response._id
            });

            ctx.page.redirect('/catalog');
        } catch (error) {
            notify(error.message);
            return;
        }
    }
};

const loginTemplate = (ctx, onSubmit) => html`
${navBar(ctx)}
<main>
    <section id="login">
        <form @submit=${onSubmit} id="login-form">
            <div class="container">
                <h1>Login</h1>
                <label for="email">Email</label>
                <input id="email" placeholder="Enter Email" name="email" type="text">
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Enter Password" name="password">
                <input type="submit" class="registerbtn button" value="Login">
                <div class="container signin">
                    <p>Dont have an account?<a href="/register">Sign up</a>.</p>
                </div>
            </div>
        </form>
    </section>
</main>`;